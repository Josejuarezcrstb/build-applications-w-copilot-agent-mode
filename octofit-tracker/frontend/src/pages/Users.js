import React, { useEffect, useState } from 'react';
import { API_BASE } from '../api/config';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `${API_BASE}/api/users/`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.json();
      })
      .then(setUsers)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
