import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Overview from '../components/Overview';
import compose from '../../../helpers/compose';

const form = reduxForm({form: 'overview'});

const mapStateToProps = state => {}

// const redux = connect()

export default compose(
  form,
  // redux
)(Overview)
