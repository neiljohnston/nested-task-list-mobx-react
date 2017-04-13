/**
  Name: /src/layouts/Primary.js

  Description: This is the primary layout for our app.

  TODO:
  - Figure out how to stretch the paper/div element to the full height.

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.
 */

import React, { Component } from 'react';

// import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
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
    height: '100%',
  },
  paper: {
    display: 'block',
    margin: 20,
    marginBottom: 200,
    height: '100%',
  },
  footerArea: {
    padding: 20,
  },
  addButton: {
    textAlign: 'right',
    margin: '10pt',
    marginRight: '15pt',
  }
};


export default class Primary extends Component {

  render() {
    return (
      <div style={styles.container}>
        <Paper style={styles.paper} zDepth={4}>
          <AppBar
            title="Hierarchical Todos"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <VisibleTodoList />
          <div style={styles.footerArea}>
            <div style={styles.addButton}>
              <AddTodo />
            </div>
            <Footer />
          </div>
        </Paper>
      </div>
    );
  }
}

// const muiTheme = getMuiTheme({
//   palette: {
//     accent1Color: deepOrange500,
//   },
// });
