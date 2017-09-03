import React from 'react'
import axios from 'axios'
import { auth } from '../../firebase'

import Button from '../../styled_components/elements/button'

function PlaidLinkConnection() {

  const PUBLIC_TOKEN = 'b41ccce2d4bf2d77e8b21c4ff67fef'

  const userId = auth.currentUser.uid

  const handleOnSuccess = (public_token, metadata) => {

    axios.post('/plaid/create-item', {public_token, userId})
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
  })

  const openLink = () => linkHandler.open()

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Button onClick={openLink}>
                Create A New Item
            </Button>

            <Button onClick={getTransactions}>
                Get Transactions
            </Button>
        </div>
    )
}

export default PlaidLinkConnection
