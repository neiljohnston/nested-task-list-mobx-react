/**
 * Name: /src/components/TodoList.js
 *
 * Description: This creates a todo list given todos.

 TODO:
 - Make this uniform with other components (aka have it extend Component, be a class, etc)

 *
 * Copyright (c) 2017-present Justin Haaheim
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 */

import React, { PropTypes } from 'react';

import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';

import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onTodoDelete, onTodoUpdate, onTodoReturnPress }) => (
  <List>
    <Subheader>[Insert Explanatory Text Here]</Subheader>
    {todos.map((todo, index) =>
      <Todo
        key={todo.id}
        {...todo}
        arrayIndex={index}
        onClick={() => onTodoClick(todo.id)}
        onDelete={() => onTodoDelete(todo.id)}
        onReturnPress={ () => onTodoReturnPress(todo.id) }
        onUpdate={(newValue) => {
          console.log("TodoList onUpdate anon function. newValue: ", newValue);
          onTodoUpdate(todo.id, newValue);
        }
        }
      />
    )}
  </List>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
}

export default TodoList
