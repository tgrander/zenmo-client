import React from 'react';
import { auth } from '../../../firebase';
import { Link } from 'react-router-dom';

import '../styles/navbar.css'

function Navbar({ currentUser }) {
  return (
    <nav>
      <Link className="logo" to="/">
        ZENMO
      </Link>
      {
        currentUser ?
        <div className="links no-auth">
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div> :
        <div className="links auth">
          <Link to="/trial-balance">Overview</Link>
          <Link to="/expenses">Expenses</Link>
          <Link to="/stats">Stats</Link>
          <a onClick={e => auth.signOut()}>
            Logout
          </a>
        </div>
      }
    </nav>
  )
}

export default Navbar;
