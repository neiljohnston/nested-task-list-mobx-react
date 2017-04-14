/************************************************

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

import TodoStore from './TodoStore'; // already instantiated object
import App from './App';

window.TodoStore = TodoStore;

render(
  <AppContainer>
    <Provider store={TodoStore}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <Provider store={TodoStore}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
