import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Users from './pages/Users';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              OctoFit Tracker
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/teams">
                    Teams
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/users">
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/leaderboard">
                    Leaderboard
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
