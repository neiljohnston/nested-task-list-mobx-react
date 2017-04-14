/************************************************

  Name: /src/layouts/Primary.js

  Description: This is the primary layout for our app.

  TODO:
  - Figure out how to stretch the paper/div element to the full height.

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React from 'react';
import { observer } from 'mobx-react';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

import Footer from '../components/Footer';
// import AddTodo from '../containers/AddTodo';
// import VisibleTodoList from '../containers/VisibleTodoList';
import TodoList from '../components/TodoList';


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


@observer class Primary extends React.Component {

  render() {

    return (
      <div style={styles.container}>
        <Paper style={styles.paper} zDepth={4}>
          <AppBar
            title="Nested Task List"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <TodoList store={this.props.store} />
          <div style={styles.footerArea}>
            <div style={styles.addButton}>
            </div>
            <Footer store={this.props.store} />
          </div>
        </Paper>
      </div>
    );
  }
}

export default Primary;

// const muiTheme = getMuiTheme({
//   palette: {
//     accent1Color: deepOrange500,
//   },
// });
