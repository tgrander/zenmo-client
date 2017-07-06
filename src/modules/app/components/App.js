import React, { Component } from 'react';
import PlaidLink from '../../plaid/plaid-link';

import SignUp from '../../auth/containers/SignUp';
import SignIn from '../../auth/containers/SignIn';

import BigHeader from '../../../styled_components/text/big-header';
import Caption from '../../../styled_components/text/caption';
import TrialBalance from '../../../modules/trialBalance/containers/TrialBalance';

import { auth } from '../../../firebase';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BigHeader>ZENMO</BigHeader>
        <Caption>Financial Nirvana</Caption>
        <SignUp/>
        <SignIn/>
        <button onClick={e => auth.signOut()}>
          Signout
        </button>
        <button onClick={e => console.log(auth.currentUser)}>
          Current User
        </button>
      </div>
    );
  }
}

export default App;
