"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToPost = exports.generateComment = exports.generateAuthor = void 0;
const faker_1 = require("faker");
const uuid_1 = require("uuid");
const constants_1 = require("./constants");
exports.generateAuthor = () => ({
    avatar: faker_1.image.people(100, 100) + `?q=${uuid_1.v4()}`,
    fullname: faker_1.name.firstName() + " " + faker_1.name.lastName()
});
exports.generateComment = (postId) => ({
    postId,
    id: uuid_1.v4(),
    createDate: new Date().toISOString(),
    author: exports.generateAuthor(),
    content: Math.random() > 0.5 ? faker_1.lorem.paragraph() : faker_1.lorem.lines()
});
exports.mapToPost = (dto) => {
    const checkPreview = /http?s?:?\/\/[^"']*\.(gif|jpe?g|tiff?|png|webp|bmp|svg)/.exec(dto.content);
    const image = checkPreview === null ? null : checkPreview[0];
    const content = checkPreview === null
        ? dto.content.trim()
        : dto.content.replace(checkPreview[0], "").trim();
    return {
        id: uuid_1.v4(),
        createDate: new Date().toISOString(),
        author: constants_1.DEFAULT_AUTHOR,
        image,
        content
    };
};
