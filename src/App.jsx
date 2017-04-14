/************************************************

  Name: /src/App.jsx

  Description: This is the root of the app.

  TODO:


  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Primary from './layouts/Primary';


@observer
class App extends Component {
  render() {
    console.log("From App, store: ", this.props.store);

    return (
      <div>
      <MuiThemeProvider>
        <Primary />
      </MuiThemeProvider>

    </div>
    );
  }
};

export default App;
