import React, { Component } from 'react';
import PlaidLink from './modules/plaid/plaid-link';

import BigHeader from './styled_components/text/big-header';
import Caption from './styled_components/text/caption';
import Overview from './modules/dashboard/containers/Overview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BigHeader>ZENMO</BigHeader>
        <Caption>Financial Nirvana</Caption>
        <PlaidLink/>
        <Overview/>
      </div>
    );
  }
}

export default App;
