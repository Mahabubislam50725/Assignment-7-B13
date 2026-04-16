import React from 'react';
import { useParams } from 'react-router';

const FriendsDetails = () => {
    const { id } =useParams()
    console.log(id,"id" );
    return (
        <div>
             <h2>Friends Details</h2>
        </div>
    );
};

export default FriendsDetails;