import React from 'react';
import axios from 'axios';
import { auth } from '../firebase';

const plaidLink = (() => {
  const userId = auth.currentUser ? auth.currentUser.uid : null;

  const PUBLIC_TOKEN = 'b41ccce2d4bf2d77e8b21c4ff67fef';

  const handleOnSuccess = (public_token, metadata) => (

    axios.post('/plaid/create-item', { public_token, userId })
      .then(res => console.log(res))
      .catch(err => console.error(err))
  );

  const getTransactions = () => (

    axios.get('/plaid/transactions')
      .then(res => console.log(res))
  );

  const linkHandler = window.Plaid.create({
    apiVersion: 'v2',
    env: 'development',
    clientName: 'Zenmo',
    key: PUBLIC_TOKEN,
    product: ['transactions', 'connect'],
    selectAccount: true,
    onSuccess: handleOnSuccess,
  });

  const openLinkHandler = () => linkHandler.open();

  const saveItem = () => {
    axios.post('/plaid/add-item', { userId })
      .then(res => console.log(res));
  };

  return {
    openLinkHandler,
    saveItem,
  };
})();

export default plaidLink;
