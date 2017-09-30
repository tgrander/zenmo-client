import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Dashboard from '../../dashboard/components/dashboard'
import Landing from '../../landing/components/Landing'
import Navbar from '../../layout/containers/Navbar'
import SignUp from '../../auth/containers/SignUp'
import SignIn from '../../auth/containers/SignIn'
import Transactions from '../../transactions/containers/Transactions'
import TrialBalance from '../../trialBalance/containers/TrialBalance'

import { Layout } from 'antd'

import { auth, database } from '../../../firebase'

import '../styles/App.css'


const { Header, Footer, Sider, Content } = Layout

const heightStyle = { height: '100%' }

class App extends Component {

    constructor(props) {
        super(props)
        this.userRef = null
        this.state = {
            hasSetCurrentUser: false,
            currentUser: null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (!this.state.hasSetCurrentUser) {
                this.setState({hasSetCurrentUser: true})
                this.props.setCurrentUser(user)
            }

            // fetch user's trial balance data
            this.props.fetchTrialBalance(user.uid)
        })
    }

    render() {

        return (
            <Router>
                <Layout style={heightStyle}>

                    <Header>Header</Header>

                    <Layout style={heightStyle}>

                        <Sider style={heightStyle}>Sider</Sider>

                        <Content style={heightStyle}>

                            <Route exact path="/" component={Dashboard} />
                            <Route path="/signup" component={SignUp} />
                            <Route path="/signin" component={SignIn} />
                            <Route path="/dashboard" component={Dashboard} />

                        </Content>
                    </Layout>

                    <Footer>Footer</Footer>

                </Layout>
            </Router>
        )
    }
}

export default App
