/**
 * Name: /src/layouts/Primary.js
 *
 * Description: This is the primary layout for our app.
 *
 * Copyright (c) 2017-present Justin Haaheim
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 */

import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


class App extends Component {
  render() {
    return (
        <AppBar
          title="Task List JDH"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
    );
  }
}

export default App;
