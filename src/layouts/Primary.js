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
import Dialog from 'material-ui/Dialog';
// import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

// export default class Primary extends Component {
//   render() {
//     return (
//         <AppBar
//           title="Task List JDH"
//           iconClassNameRight="muidocs-icon-navigation-expand-more" />
//     );
//   }
// }


const styles = {
  container: {
    textAlign: 'left',
    padding: 0,
  },
};

export default class Primary extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );



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
