import React from 'react';
import AdminNavbar from './AdminNavbar';

function AdminHome() {
  return (
    <div className="overflow-hidden">
      <AdminNavbar />
      <div className="container mx-20 pl-2 py-5">
        <h1>Welcome to the Admin Home!</h1>
        <p>This is where you can manage various aspects of your application.</p>
      </div>
    </div>
  );
}

export default AdminHome;
