import React from 'react';
import axios from 'axios';

import Button from '../../styled_components/elements/button';

function PlaidLinkConnection() {

  const PUBLIC_TOKEN = 'b41ccce2d4bf2d77e8b21c4ff67fef';

  const handleOnSuccess = (public_token, metadata) => {
    console.log('METADATA: ', metadata);
    console.log('PUBLIC TOKEN: ', public_token);

    axios.post('/plaid/accessToken', {public_token})
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  const getTransactions = () => {
    axios.post('/plaid/transactions')
      .then(res => console.log(res))
  }

  const linkHandler = window.Plaid.create({
    apiVersion: 'v2',
    env: 'development',
    clientName: 'Zenmo - Financial Nirvana',
    key: PUBLIC_TOKEN,
    product: ['transactions', 'connect'],
    selectAccount: true,
    onSuccess: handleOnSuccess,
  });

  return (
    <div>
      <Button onClick={ e => linkHandler.open() }>
        Create A New Item
      </Button>
      <Button onClick={getTransactions}>
        Get Transactions
      </Button>
    </div>
  );
}

export default PlaidLinkConnection;
