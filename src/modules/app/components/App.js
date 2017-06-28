import React, { Component } from 'react';
import PlaidLink from '../../plaid/plaid-link';

import BigHeader from '../../../styled_components/text/big-header';
import Caption from '../../../styled_components/text/caption';
import Overview from '../../../modules/dashboard/containers/Overview';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BigHeader>ZENMO</BigHeader>
        <Caption>Financial Nirvana</Caption>
        <Overview/>
      </div>
    );
  }
}

export default App;
