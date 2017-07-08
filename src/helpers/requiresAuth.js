import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import { Route } from 'react-router-dom';
import Landing from '../modules/landing/components/landing';

const requiresAuth = currentUser =>
  branch(
    currentUser,
    renderComponent(<Route path="/" component={Landing} />)
  )

export default requiresAuth;
