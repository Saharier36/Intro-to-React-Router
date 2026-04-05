import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id, title}= post
    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate(`/posts/${id}`);
    }
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
        <button onClick={handleNavigate}>Details of: {id}</button>
      </div>
    );
};

export default Post;