import pipe from 'lodash/fp/flow';
import { connect } from 'react-redux';
import { getDateRangeDefaultValue } from 'modules/transactions/actions';
import Dashboard from './dashboard/Dashboard';


const actions = { getDateRangeDefaultValue };

const redux = connect(null, actions);

export default pipe(redux)(Dashboard);
