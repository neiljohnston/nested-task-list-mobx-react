/**

  Name: /src/App.jsx

  Description: This is the root of the app.

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';


// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Primary from './layouts/Primary';

// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#0A4D67',
    textColor: '#51585a',
  },
});


@observer
class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme} >
          <Primary store={this.props.store} />
        </MuiThemeProvider>
        <DevTools />
      </div>
    );
  }
}

export default App;
