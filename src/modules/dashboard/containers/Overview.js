import { reduxForm } from 'redux-form';
import Overview from '../components/Overview';

export default reduxForm({form: 'overview'})(Overview);
