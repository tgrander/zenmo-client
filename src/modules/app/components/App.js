import React, { Component } from 'react';
import PlaidLink from '../../plaid/plaid-link';

import BigHeader from '../../../styled_components/text/big-header';
import Caption from '../../../styled_components/text/caption';
import TrialBalance from '../../../modules/trialBalance/containers/TrialBalance';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BigHeader>ZENMO</BigHeader>
        <Caption>Financial Nirvana</Caption>
        <TrialBalance/>
      </div>
    );
  }
}

export default App;