import React from 'react';
import UserNavbar from './UserNavbar';

function UserHome() {
  return (
    <div className="overflow-hidden">
      <UserNavbar />
      <div className="container mx-20 pl-2 py-5">
        <h1>Welcome to the User Home!</h1>
        <p>This is where you can manage various aspects of your application.</p>
      </div>
    </div>
  );
}

export default UserHome;
