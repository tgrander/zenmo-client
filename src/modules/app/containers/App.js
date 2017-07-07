import { connect } from 'react-redux';
import { auth } from '../../../firebase';
import pipe from 'lodash/fp/flow';

import App from '../components/App';

auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log('USER DATA', user);
  } else {
    // User is signed out.
    console.log(NO USER DATA);
  }
});

const redux = connect(null)

export default pipe(
  redux,
)(App)
