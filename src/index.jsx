import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';

import AppState from './AppState';
import App from './App';

const appState = new AppState();
window.store = appState;

render(
  <AppContainer>
    <Provider store={appState}>
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
        <Provider store={appState}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
