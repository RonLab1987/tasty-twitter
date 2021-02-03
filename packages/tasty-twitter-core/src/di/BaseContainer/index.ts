import { container, instanceCachingFactory } from "tsyringe";

import {
    PostsRepositoryLocal,
    IPostsRepositoryToken
} from "../../repositories/PostsRepository";
import {
    PostFeedService,
    IPostFeedServiceToken
} from "../../services/PostFeedService";
import {
    MostDiscussedPostFeedService,
    IMostDiscussedPostFeedServiceToken
} from "../../services/MostDiscussedPostFeedService";
import {
    ApplicationConfigRepositoryLocal,
    IApplicationConfigRepositoryToken
} from "../../repositories/ApplicationConfigRepository";

export const baseContainer = container.createChildContainer()

baseContainer.register(IPostsRepositoryToken, {
    useFactory: instanceCachingFactory(() => {
        return new PostsRepositoryLocal(window.localStorage);
    })
});

baseContainer.register(IApplicationConfigRepositoryToken, {
    useFactory: instanceCachingFactory(() => {
        return new ApplicationConfigRepositoryLocal(window.localStorage);
    })
});

baseContainer.register(IPostFeedServiceToken, {
    useFactory: instanceCachingFactory(container => {
        return container.resolve(PostFeedService);
    })
});

baseContainer.register(IMostDiscussedPostFeedServiceToken, {
    useFactory: instanceCachingFactory(container => {
        return container.resolve(MostDiscussedPostFeedService);
    })
});
