import React from 'react';
import { auth } from '../../../firebase';

import '../styles/navbar.css'

function Navbar({ currentUser }) {
  return (
    <nav>
      <div className="logo">ZENMO</div>
      {
        currentUser ?
        <div className="links no-auth">
          <a>Sign In</a>
          <a>Sign Up</a>
        </div> :
        <div className="links auth">
          <a>Overview</a>
          <a>Expenses</a>
          <a>Stats</a>
          <a onClick={e => auth.signOut()}>
            Logout
          </a>
        </div>
      }
    </nav>
  )
}

export default Navbar;
