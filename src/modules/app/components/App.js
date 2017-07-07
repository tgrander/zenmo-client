import React, { Component } from 'react';
import PlaidLink from '../../plaid/plaid-link';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Navbar from '../../layout/containers/Navbar';
import Landing from '../../landing/components/Landing';
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
    if (!this.state.hasSetCurrentUser) {
      
    }
  }

  render() {

    return (
      <Router>
        <div className="App">

          <Navbar />

          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />

        </div>
      </Router>
    );
  }
}

export default App;
