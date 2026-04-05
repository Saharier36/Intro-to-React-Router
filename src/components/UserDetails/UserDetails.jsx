import React from 'react';
import { useLoaderData } from 'react-router';
import './UserDetails.css'
import { useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
const {userId} = useParams()
console.log(userId);




    const { username, website, address, company } = user;
    return (
      <div className='details'>
        <h3>Users Details</h3>
        <h4>Username: {username}</h4>
        <p>Website: {website}</p>

        <h4>Address</h4>
        <p>
          {address.street}, {address.suite}
        </p>
        <p>
          {address.city} - {address.zipcode}
        </p>
        <p>
          Lat: {address.geo.lat}, Lng: {address.geo.lng}
        </p>

        <h4>Company</h4>
        <p>Name: {company.name}</p>
        <p>Catch Phrase: {company.catchPhrase}</p>
        <p>BS: {company.bs}</p>
      </div>
    );
};

export default UserDetails;