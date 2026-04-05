import React, { Suspense, useState } from "react";
import './User.css'
import { Link } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";
const User = ({ user }) => {
  const [showInfo, setshowInfo] = useState(false)
    const {id, name, email, phone}= user

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
  return <div className="card">
    <h3>{name}</h3>
    <p>Email: {email}</p>
    <p><small>Phone: {phone}</small></p>
    <Link to={`/users/${id}`}>Show Details</Link><br />
    <button onClick={()=> setshowInfo(!showInfo)}>{showInfo ? 'hide' : 'show'} Info</button>
    {
      showInfo && <Suspense fallback={<span>loading...</span>}>
        <UserDetails2 userPromise={userPromise}></UserDetails2>
      </Suspense>
    }
  </div>;
};

export default User;
