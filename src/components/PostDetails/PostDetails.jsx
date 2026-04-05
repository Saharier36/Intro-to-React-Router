import React from 'react';
import { useNavigate } from 'react-router';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
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
        <button onClick={()=> navigate(-1)}>Go Back</button>
      </div>
    );
};

export default PostDetails;