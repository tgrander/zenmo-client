import React from 'react';
import { auth } from '../../../firebase';
import { Link } from 'react-router-dom';
import plaidLink from '../../plaid/plaid-link'

import '../styles/navbar.css'

function Navbar({ currentUser }) {

    return (
        <nav>
            <Link className="logo" to="/">
                ZENMO
            </Link>

            {
                currentUser
                    ?   <div className="links auth">
                            <Link to="/overview">Overview</Link>
                            <Link to="/transactions">Transactions</Link>
                            <a onClick={e => plaidLink.openLinkHandler()}>Add Account</a>
                            <a onClick={e => plaidLink.saveItem()}>Save Item</a>
                            <a onClick={e => auth.signOut()}>Logout</a>
                        </div>
                    :   <div className="links no-auth">
                            <Link to="/signin">Sign In</Link>
                            <Link to="/signup">Sign Up</Link>
                        </div>
            }
        </nav>
    )
}

export default Navbar;
