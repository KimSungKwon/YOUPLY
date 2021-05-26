import React from 'react';
import PaginationContainer from '../containers/posts/PaginationContainer';
import PostListContainer from '../containers/posts/PostListContainer';

const PostsListPage = () => {
    return (
        <>
        <PostListContainer />
        <PaginationContainer />
        </>
    );
};

export default PostsListPage;