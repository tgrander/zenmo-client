import axios from 'axios'
import { db } from 'firebase.js'


const getTransactions = async (endpoint, userId) => {

    const transactions = await axios.post(endpoint)

    return transactions.data
}

const endpoint = '/transactions'

const paths = {

    get: '/get'
}

const endpoints = {

    get: endpoint + paths.get
}

export default {

    get: () => getTransactions(endpoints.get)
}
