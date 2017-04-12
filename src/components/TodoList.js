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

import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onTodoDelete }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        onDelete={() => onTodoDelete(todo.id)}
      />
    )}
  </ul>
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
