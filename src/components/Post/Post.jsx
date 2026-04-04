import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id, title}= post
    return (
      <div
        style={{
          border: "2px solid green",
          margin: "3px",
          padding: "5px",
          maxWidth: "700px",
        }}
      >
        <h2>{title}</h2>
        <Link to={`/posts/${id}`}>
          <button>Show Details</button>
        </Link>
      </div>
    );
};

export default Post;