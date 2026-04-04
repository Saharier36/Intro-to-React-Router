import React from "react";
import './User.css'
import { Link } from "react-router";
const User = ({ user }) => {
    const {id, name, email, phone}= user
  return <div className="card">
    <h3>{name}</h3>
    <p>Email: {email}</p>
    <p><small>Phone: {phone}</small></p>
    <Link to={`/users/${id}`}>Show Details</Link>
  </div>;
};

export default User;
