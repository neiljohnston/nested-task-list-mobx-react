/************************************************

  Name: /src/components/TodoList.js

  Description: This creates a todo list given todos.

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React, { PropTypes } from 'react';
import { observer, inject } from 'mobx-react';

import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';

import Todo from './Todo'


@inject('store') @observer class TodoList extends React.Component {

  render() {

    console.log(this.props)
    const { todos, addTodoAfter, deleteTodo } = this.props.store;
    console.log("wtf...", addTodoAfter);

    return (
      <List>
        <Subheader>Created with love by Justin Haaheim</Subheader>

        { todos.map((todo, index) =>
          <Todo
            key={todo.id}
            completed={todo.completed}
            text={todo.text}
            arrayIndex={index}
            onClick={ todo.toggle }
            onDelete={ () => deleteTodo(index) }
            onReturnPress={ this.props.store.addTodoAfter }
            onUpdate={ (newValue) => {
              console.log("TodoList onUpdate anon function. newValue: ", newValue);
              todo.update(newValue);
            }
            }
          />
        )}

      </List>
    )
  }
}

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired,
//   onTodoDelete: PropTypes.func.isRequired,
// }

export default TodoList;
