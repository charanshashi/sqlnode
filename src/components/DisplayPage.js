import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DisplayPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/display')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.name}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayPage;
