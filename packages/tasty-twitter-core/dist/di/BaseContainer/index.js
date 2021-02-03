"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseContainer = void 0;
const tsyringe_1 = require("tsyringe");
const PostsRepository_1 = require("../../repositories/PostsRepository");
const PostFeedService_1 = require("../../services/PostFeedService");
const MostDiscussedPostFeedService_1 = require("../../services/MostDiscussedPostFeedService");
const ApplicationConfigRepository_1 = require("../../repositories/ApplicationConfigRepository");
exports.baseContainer = tsyringe_1.container.createChildContainer();
exports.baseContainer.register(PostsRepository_1.IPostsRepositoryToken, {
    useFactory: tsyringe_1.instanceCachingFactory(() => {
        return new PostsRepository_1.PostsRepositoryLocal(window.localStorage);
    })
});
exports.baseContainer.register(ApplicationConfigRepository_1.IApplicationConfigRepositoryToken, {
    useFactory: tsyringe_1.instanceCachingFactory(() => {
        return new ApplicationConfigRepository_1.ApplicationConfigRepositoryLocal(window.localStorage);
    })
});
exports.baseContainer.register(PostFeedService_1.IPostFeedServiceToken, {
    useFactory: tsyringe_1.instanceCachingFactory(container => {
        return container.resolve(PostFeedService_1.PostFeedService);
    })
});
exports.baseContainer.register(MostDiscussedPostFeedService_1.IMostDiscussedPostFeedServiceToken, {
    useFactory: tsyringe_1.instanceCachingFactory(container => {
        return container.resolve(MostDiscussedPostFeedService_1.MostDiscussedPostFeedService);
    })
});
