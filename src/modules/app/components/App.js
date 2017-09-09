import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from '../../layout/containers/Navbar'
import Landing from '../../landing/components/Landing'
import TrialBalance from '../../trialBalance/containers/TrialBalance'
import SignUp from '../../auth/containers/SignUp'
import SignIn from '../../auth/containers/SignIn'
import Transactions from '../../transactions/containers/Transactions'

import { auth, database } from '../../../firebase'

import '../styles/App.css'

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

        console.log('auth: ', auth)

        const RenderTrialBalance = () => (
          <div>
            {this.props.isFetchingTrialBalance ?
                <div>Loading...</div> :
                <TrialBalance />
            }
          </div>
        )

        return (
            <Router>
                <div className="App">

                    <Navbar currentUser={this.props.currentUser} />

                    <Route exact path="/" component={Landing} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/overview" component={RenderTrialBalance} />
                    <Route path="/transactions" component={Transactions} />

                </div>
            </Router>
        )
    }
}

export default App
