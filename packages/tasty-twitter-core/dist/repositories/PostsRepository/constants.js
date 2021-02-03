"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMENTS_LIST_KEY = exports.POSTS_LIST_KEY = exports.DEFAULT_AUTHOR = void 0;
const faker_1 = require("faker");
exports.DEFAULT_AUTHOR = {
    avatar: faker_1.image.people(100, 100),
    fullname: "Random Man"
};
exports.POSTS_LIST_KEY = "TT_POSTS_LIST";
exports.COMMENTS_LIST_KEY = "TT_COMMENTS_LIST";
