/**

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
import Card from 'material-ui/Card';

import Footer from '../components/Footer';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

const styles = {
  body: {margin: 0},
  container: {
    textAlign: 'left',
    padding: 0,
    margin: 0,
  },
  paper: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    position: 'relative',
    margin: 0,
    height: '100%',
    minWidth: '460px',
    maxWidth: '800px',
    minHeight: '100%',
  },
  card: {
    margin: '16px',
    padding: '16px',
  },
  contentBody: {
    height: '100%',
  },
  footerArea: {
    padding: 0,
    bottom: '0px',
    left: '0px',
    right: '0px',
    width: '100%',
  },
  addButton: {
    textAlign: 'right',
    bottom: '0px',
    right: '0px',
    margin: '40px',
    marginRight: '50px',
  }
};


@observer class Primary extends React.Component {

  render() {
    return (
      <div style={styles.container}>
        <Paper style={styles.paper} zDepth={4}>
          <div style={styles.contentBody}>
            <AppBar
              position="fixed"
              title="Playbook/Tasks Quick Creation Pattern"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <Card style={styles.card}>
              <h4>Developer Note:</h4>
              <p>This patteren will serve as the basic for playbook and task creation.</p>
              <ul>
                <li>You can add a new item by pressing enter. </li>
                <li>Move up/down using the arrows. </li>
                <li>Shift a item from Phase to Task to Subtask, with windows/cmd+left or windows/cmd+right arrow keys.</li>
                <li>Move an item up/down with windows/cmd+up or windows/cmd+down.</li>
                <li>Delete an empty line with backspace, or click the trashcan.</li>
              </ul>
            </Card>
            <TodoList store={this.props.store} style={styles.todoList} />
          </div>
          <div style={styles.footerArea}>
            <div style={styles.addButton}>
              <AddTodo store={this.props.store} />
            </div>
            {/* <Footer store={this.props.store} /> */}
          </div>
        </Paper>
      </div>
    );
  }
}

export default Primary;
