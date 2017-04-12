/**
 * Name: /src/App.js
 *
 * Description: This is the root of our app.
 *
 * Copyright (c) 2017-present Justin Haaheim
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 */


 // Needed for onTouchTap
 // http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Primary from './layouts/Primary';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Primary />
      </MuiThemeProvider>
    );
  }
}

export default App;
