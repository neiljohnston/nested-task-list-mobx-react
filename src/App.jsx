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
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { pinkA200, grey100, grey500, grey700, red200, red100, red500,
//           blueGrey800, blueGrey500, blueGrey900 } from 'material-ui/styles/colors';

// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import Primary from './layouts/Primary';


// const muiTheme = getMuiTheme({
//   palette: {
//     primary1Color: blueGrey800,
//     primary2Color: pinkA200,
//     primary3Color: blueGrey900,
//     accent1Color: red200,
//     accent2Color: red100,
//     accent3Color: red500,
//     textColor: grey700,
//
//   },
// });


@observer
class App extends Component {
  render() {
    console.log("From App, store: ", this.props.store);

    return (
      <div>
      <MuiThemeProvider>
        <Primary store={this.props.store} />
      </MuiThemeProvider>

    </div>
    );
  }
};

export default App;
