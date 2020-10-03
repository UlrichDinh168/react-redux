import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const ThunkApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ThunkApp;
