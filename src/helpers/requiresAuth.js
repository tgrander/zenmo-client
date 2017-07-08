import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import { Route } from 'react-router-dom';
import Landing from '../modules/landing/components/Landing';
import React from 'react';
import { Redirect } from 'react-router'

const requiresAuth = noAuth =>
  branch(
    noAuth,
    renderComponent(<Redirect to="/" push />)
  )

export default requiresAuth;
