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
import Footer from './Footer'


// export default class Primary extends Component {
//   render() {
//     return (
//         <AppBar
//           title="Task List JDH"
//           iconClassNameRight="muidocs-icon-navigation-expand-more" />
//     );
//   }
// }

export default class Primary extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    const todosDebug = [{
      id: 1,
      completed: false,
      text: 'Todo number 1'
    },
    {
      id: 2,
      completed: false,
      text: 'Todo number 2'
    },
    {
      id: 3,
      completed: false,
      text: 'Todo number 3'
    }];

    this.state = {
//      todos: [],
      todos: todosDebug,
      open: false,
    };

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

  toggleTodo(id) {
    // NOTE: This is potentially messy. Better to implement with redux.
    console.log(`Todo clicked! Id: ${id}`);

    let tmpTodos = this.state.todos.slice();
    tmpTodos = tmpTodos.map(todo => {
      if (todo.id == id) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        });
      }
      return todo;
    });
    this.setState({
      todos: tmpTodos,
    });
  }

  onTodoType(id) {
    console.log(`Todo clicked! Id: ${id}`);
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
        <TodoList
          todos={this.state.todos}
          onTodoClick={this.toggleTodo.bind(this)}
          onTodoType={this.onTodoType.bind(this)}
        />

        <Dialog
          open={this.state.open}
          title="Super Secret Password"
          actions={standardActions}
          onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
          <Footer />
        </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'left',
    padding: 20,
  },
};

// const muiTheme = getMuiTheme({
//   palette: {
//     accent1Color: deepOrange500,
//   },
// });
