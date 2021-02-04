import React from 'react';
import {Container} from "../components/Container";
import {CreatePostForm} from "../components/CreatePostForm";

import '../styles/global.sass'

import {container} from "../di";
import {IPostFeedServiceToken} from "@ronlab/tasty-twitter-core";

function App() {
  const postFeedService = container.resolve(IPostFeedServiceToken)


  return (
    <div className="app">
      <Container>
        <CreatePostForm onSubmit={postFeedService.createPost}/>
      </Container>
    </div>
  );
}

export default App;
