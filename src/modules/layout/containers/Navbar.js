import { connect } from 'react-redux';
import pipe from 'lodash/fp/flow';

import Navbar from '../components/Navbar';

const redux = connect(
  state => ({
    
  })
)

export default pipe(
  redux
)(Navbar);
