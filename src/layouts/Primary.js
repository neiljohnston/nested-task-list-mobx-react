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

// import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
// import Dialog from 'material-ui/Dialog';
// import {deepOrange500} from 'material-ui/styles/colors';
// import FlatButton from 'material-ui/FlatButton';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Footer from '../components/Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';


const styles = {
  container: {
    textAlign: 'left',
    padding: 0,
  },
};

export default class Primary extends Component {

  render() {
    return (
      <div style={styles.container}>
        <AppBar
          title="Hierarchical Todos"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <VisibleTodoList />
        <AddTodo />
        <Footer />
      </div>
    );
  }
}

// const muiTheme = getMuiTheme({
//   palette: {
//     accent1Color: deepOrange500,
//   },
// });
