import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import registerServiceWorker from './registerServiceWorker';

import reducer from './ducks';
import BaseApp from './App';

import 'normalize.css';
import './index.css';



const store = createStore(
  reducer,
  devToolsEnhancer({})
);

ReactDOM.render(
  <Provider store={store}>
    <BaseApp />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
