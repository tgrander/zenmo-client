import { db } from '../firebase'


const getTransactions = async (endpoint, userId) => await axios.post(endpoint)

const endpoint = '/transactions'

const paths = {

    get: '/transactions'
}

const endpoints = {

    get: `${endpoint}${paths.get}`
}

export default {

    get: () => getTransactions(endpoints.get)
}
