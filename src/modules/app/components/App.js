import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import once from 'lodash/once';

import Navbar from '../../layout/containers/Navbar';
import Landing from '../../landing/components/Landing';
import TrialBalance from '../../trialBalance/containers/TrialBalance';
import SignUp from '../../auth/containers/SignUp';
import SignIn from '../../auth/containers/SignIn';

import { auth, database } from '../../../firebase';

import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.userRef = null;
    this.state = {
      hasSetCurrentUser: false,
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.props.setCurrentUser(user)
        this.userRef = database.ref(`/users/${user.uid}`)
        this.userRef.child('trialBalance').
          once('value').
          then(snapshot => {
            if (snapshot.val()) return;
            this.userRef.child('trialBalance').set({
              assets: {
                'Checkings': 0,
                'Savings': 0,
                'Monthly Income': 0
              },
              expenses: {
                'Rent': 0,
                'Monthly Expenses': 0,
              },
              liabilities: {
                'Student Loans': 0,
                'Bootcamp Loans': 0,
              },
              goals: {
                'Add to Savings': 0,
                'Invest in Stocks': 0,
              },
              totals: {
                assets: 0,
                expenses: 0,
                liabilities: 0,
                goals: 0,
                netIncome: 0,
                bottomLine: 0,
              }
            })
          })

      }
    });
  }

  render() {

    return (
      <Router>
        <div className="App">

          <Navbar currentUser={this.props.currentUser} />

          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/overview" component={TrialBalance} />

        </div>
      </Router>
    );
  }
}

export default App;
