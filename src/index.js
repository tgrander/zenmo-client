import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'rxjs';

import registerServiceWorker from './registerServiceWorker';
import store from './store';
import App from './modules/app/containers/App';

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
