import { container, instanceCachingFactory } from "tsyringe";

import {
  PostsRepositoryLocal,
  IPostsRepositoryToken
} from "@/repositories/PostsRepository";
import {
  PostFeedService,
  IPostFeedServiceToken
} from "@/services/PostFeedService";
import {
  MostDiscussedPostFeedService,
  IMostDiscussedPostFeedServiceToken
} from "@/services/MostDiscussedPostFeedService";

container.register(IPostsRepositoryToken, {
  useFactory: instanceCachingFactory(() => {
    return new PostsRepositoryLocal(window.localStorage);
  })
});

container.register(IPostFeedServiceToken, {
  useFactory: instanceCachingFactory(container => {
    return container.resolve(PostFeedService);
  })
});

container.register(IMostDiscussedPostFeedServiceToken, {
  useFactory: instanceCachingFactory(container => {
    return container.resolve(MostDiscussedPostFeedService);
  })
});
