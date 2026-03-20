import React, { useEffect, useState } from 'react';
import { API_BASE } from '../api/config';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `${API_BASE}/api/teams/`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.json();
      })
      .then(setTeams)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Teams</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group">
        {teams.map((team) => (
          <li key={team.id} className="list-group-item">
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
