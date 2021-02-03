"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRepositoryLocal = void 0;
const rxjs_1 = require("rxjs");
const utils_1 = require("./utils");
const tsyringe_1 = require("tsyringe");
const operators_1 = require("rxjs/operators");
const constants_1 = require("./constants");
const faker_1 = require("faker");
let PostsRepositoryLocal = class PostsRepositoryLocal {
    constructor(_storage) {
        this._storage = _storage;
        this._postViews$ = undefined;
        this._scheduledGenerators = new Map();
        this._posts$ = new rxjs_1.BehaviorSubject(this._getPosts());
        this._comments$ = new rxjs_1.BehaviorSubject(this._getComments());
        // init comment generator
        this._posts$.subscribe(posts => {
            posts.forEach(({ id }) => this._initCommentGenerator(id));
        });
        // save changes
        this._posts$.pipe(operators_1.skip(1)).subscribe(posts => this._savePosts(posts));
        this._comments$
            .pipe(operators_1.skip(1))
            .subscribe(comments => this._saveComments(comments));
    }
    get postViews$() {
        if (this._postViews$) {
            return this._postViews$;
        }
        this._postViews$ = rxjs_1.combineLatest(this._posts$, this._comments$).pipe(operators_1.map(([posts, comments]) => {
            return posts.map(postModel => (Object.assign(Object.assign({}, postModel), { comments: comments
                    .filter(({ postId }) => postId === postModel.id)
                    .map((_a) => {
                    var { postId } = _a, commentView = __rest(_a, ["postId"]);
                    return commentView;
                }) })));
        }), operators_1.shareReplay(1));
        return this._postViews$;
    }
    createPost(dto) {
        return new Promise(resolve => {
            this._posts$.next([utils_1.mapToPost(dto), ...this._posts$.getValue()]);
            resolve();
        });
    }
    _getPosts() {
        const content = this._storage.getItem(constants_1.POSTS_LIST_KEY);
        if (!content) {
            return [];
        }
        return JSON.parse(content);
    }
    _savePosts(posts) {
        this._storage.setItem(constants_1.POSTS_LIST_KEY, JSON.stringify(posts));
    }
    _getComments() {
        const content = this._storage.getItem(constants_1.COMMENTS_LIST_KEY);
        if (!content) {
            return [];
        }
        return JSON.parse(content);
    }
    _saveComments(comments) {
        this._storage.setItem(constants_1.COMMENTS_LIST_KEY, JSON.stringify(comments));
    }
    _initCommentGenerator(postId) {
        if (this._scheduledGenerators.has(postId)) {
            return;
        }
        this._scheduleCommentGenerator(postId);
    }
    _scheduleCommentGenerator(postId) {
        const timeoutId = setTimeout(() => {
            this._comments$.next([
                utils_1.generateComment(postId),
                ...this._comments$.getValue()
            ]);
            this._scheduleCommentGenerator(postId);
        }, faker_1.random.number({ min: 5000, max: 30000, precision: 5000 }));
        this._scheduledGenerators.set(postId, timeoutId);
    }
};
PostsRepositoryLocal = __decorate([
    tsyringe_1.injectable()
], PostsRepositoryLocal);
exports.PostsRepositoryLocal = PostsRepositoryLocal;
