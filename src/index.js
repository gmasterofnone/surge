import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { store } from './store';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

// hello

ReactDOM.render(router, document.getElementById('root'));
serviceWorker.unregister();