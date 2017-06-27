import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import store from './store';

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
      </Router>
    </Provider>
  )
}

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
