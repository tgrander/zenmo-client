import axios from 'axios'


const api = 'https://zenmo-api.herokuapp.com/'
const localApi = 'http://localhost:8000/'

const endpoints = {
    transactions: localApi + 'plaid/transactions'
}

export default {

    getTransactions() {

        return axios.get('/plaid/transactions')
    }
}
