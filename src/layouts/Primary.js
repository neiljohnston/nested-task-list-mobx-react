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
import Subheader from 'material-ui/Subheader';

import Footer from '../components/Footer';
import AddTodo from '../containers/AddTodo';
// import VisibleTodoList from '../containers/VisibleTodoList';
import TodoList from '../components/TodoList';


const styles = {
  container: {
    textAlign: 'left',
    padding: 0,
    height: '100%',
  },
  paper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    margin: 20,
    marginBottom: 200,
    height: '100%',
    maxWidth: '800px',
    minHeight: '540px',
  },
  contentBody: {
    position: 'relative',
    height: '100%',
//    flex: 2,
    flexGrow: 2,
  },
  footerArea: {
    padding: 0,
    position: 'relative',
    bottom: '0px',
    left: '0px',
    right: '0px',
  },
  addButton: {
    textAlign: 'right',
    position: 'absolute',
    bottom: '55px',
    right: '55px',
    margin: '10px',
    marginRight: '25px',
  }
};


@observer class Primary extends React.Component {

  render() {

    return (
      <div style={styles.container}>
        <Paper style={styles.paper} zDepth={4}>
          <div style={styles.contentBody}>
            <AppBar
              title="Nested Task List"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <Subheader>Created with love by Justin Haaheim</Subheader>
            <TodoList store={this.props.store} />
            <div style={styles.addButton}>
              <AddTodo store={this.props.store} />
            </div>
          </div>
          <div style={styles.footerArea}>
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
