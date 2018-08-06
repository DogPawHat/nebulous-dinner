import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import reducer from './ducks';
import BaseApp from './App';

import 'normalize.css';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BaseApp />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
