"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostFeedService = void 0;
const tsyringe_1 = require("tsyringe");
const PostsRepository_1 = require("../../repositories/PostsRepository");
const operators_1 = require("rxjs/operators");
let PostFeedService = class PostFeedService {
    constructor(_postRepository) {
        this._postRepository = _postRepository;
    }
    get postViews$() {
        return this._postRepository.postViews$.pipe(operators_1.map(postViews => postViews.map(view => (Object.assign(Object.assign({}, view), { comments: view.comments.slice(0, 3) })))));
    }
    createPost(dto) {
        return this._postRepository.createPost(dto);
    }
};
PostFeedService = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject(PostsRepository_1.IPostsRepositoryToken))
], PostFeedService);
exports.PostFeedService = PostFeedService;
