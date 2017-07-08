import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Navbar from '../../layout/containers/Navbar';
import Landing from '../../landing/components/Landing';
import TrialBalance from '../../trialBalance/containers/TrialBalance';
import SignUp from '../../auth/containers/SignUp';
import SignIn from '../../auth/containers/SignIn';

import { auth } from '../../../firebase';

import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasSetCurrentUser: false,
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.props.setCurrentUser(currentUser)
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
