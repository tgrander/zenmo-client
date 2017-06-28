import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import pipe from 'lodash/fp/flow';

import Overview from '../components/Overview';

const form = reduxForm({form: 'overview'});

const mapStateToProps = state => {
  const { assets } = state;
  return {
    assets,
  }
}

const redux = connect(
  mapStateToProps,
  {}
)

export default pipe(
  form,
  redux
)(Overview)
