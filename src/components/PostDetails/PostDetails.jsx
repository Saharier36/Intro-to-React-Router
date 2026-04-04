import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()
    return (
      <div
        style={{
          border: "2px solid red",
          margin: "3px",
          padding: "5px",
          maxWidth: "300px",
        }}
      >
        <h2>User Id: {post.userId}</h2>
        <p>Details: {post.body}</p>
      </div>
    );
};

export default PostDetails;