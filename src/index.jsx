/**

  Name: /src/index.jsx

  Description: This houses App and provides hot reloading during dev.

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';

import TodoListStoreInstance from './stores/TodoListStore'; // already instantiated object
import App from './App';

// Note: The Provider/inject method of passing the store isn't currently used.

// // For debugging
// window.TodoListStoreInstance = TodoListStoreInstance;
// window.todoRoot = TodoListStoreInstance.todoRoot;

render(
  <AppContainer>
    <Provider store={TodoListStoreInstance}>
      <App store={TodoListStoreInstance} />
    </Provider>
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <Provider store={TodoListStoreInstance}>
          <NextApp store={TodoListStoreInstance} />
        </Provider>
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
