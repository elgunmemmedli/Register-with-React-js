import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
          <Link to='/add' > 
          <button className='btn btn-info' > Add products </button>
           </Link>

           <Link to='/list' > 
          <button className='btn btn-info' > List products </button>
           </Link>
        </div>
    );
}

export default Profile;
