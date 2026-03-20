import React, { useEffect, useState } from 'react';
import { API_BASE } from '../api/config';

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `${API_BASE}/api/leaderboard/`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.json();
      })
      .then(setEntries)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Leaderboard</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group">
        {entries
          .slice()
          .sort((a, b) => b.points - a.points)
          .map((entry) => (
            <li key={entry.id} className="list-group-item d-flex justify-content-between">
              <span>{entry.user}</span>
              <span className="badge bg-primary">{entry.points}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
