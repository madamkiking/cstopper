import React, { useState } from 'react';
import './design/record_mngmnt.css';
import Navbar from './Navbar';
import userData from './Userdata.js';

const Record_mngmnt = () => {
const [searchTerm, setSearchTerm] = useState('');
const [emergencyData, setEmergencyData] = useState([

]);
const filteredUserData = userData.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.username}`.toLowerCase().includes(searchTerm.toLowerCase())
  );
// Other state and functions specific to Record_mngmnt can be added here

return (
  <div className='App'>
    <Navbar />
    <div className='body'>
      <div className='texts'>
        <h1>EMERGENCY REPORTS</h1>

        <div className='search-bar'>
          <div className='search-input'>
            <input
              type='text'
              placeholder='Search...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* You can add other buttons or elements specific to Record_mngmnt here */}
        </div>

        <div className='table-container'>
          <div className='fixed-header'>
            <table>
              <thead>
                <tr>
                  <th>Reporter</th>
                  <th>Location</th>
                  <th>Emergency Level</th>
                  <th>Details</th>
                  <th>Date and Time</th>
                  {/* Add more columns as needed */}
                </tr>
              </thead>
            </table>
          </div>
          <div className='scrollable-table'>
            <table>
              <tbody>
                {filteredUserData.map((user, index) => {
                  const userer = userData[index] || {};
                  return (
                  <tr key={index}>
                    <td>{user.firstName} {user.lastName}</td>
                    <td>{user.location}</td>
                    <td>{userer.password}</td>
                    <td>{userer.detail}</td>
                    <td>{userer.dateTime}</td>
                    {/* Add more cells based on your data structure */}
                  </tr>
                );
                  })}
              </tbody>
            </table>
          </div>
          {/* You can display messages or additional content here if needed */}
        </div>

        {/* Other content specific to Record_mngmnt can be added here */}
      </div>
    </div>
  </div>
);
};


export default Record_mngmnt;
