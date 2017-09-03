import axios from 'axios'


const api = 'https://zenmo-api.herokuapp.com/'

const endpoints = {
    transactions: api + 'transactions'
}

export default {
    getTransactions() {
        axios.get(endpoints.transactions)
            .then(res => console.log(res))
    }
}
