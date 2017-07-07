import { connect } from 'react-redux';
import pipe from 'lodash/fp/flow';

import Navbar from '../components/Navbar';

const redux = connect(
  state => ({
    currentUser: {}
  })
)

export default pipe(
  redux
)(Navbar);
