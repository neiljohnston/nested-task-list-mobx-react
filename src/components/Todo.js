/**
 * Name: /src/components/Todo.js
 *
 * Description: This is an individual todo.

 TODO:
 - Make this uniform with other components (aka have it extend Component, be a class, etc)

 *
 * Copyright (c) 2017-present Justin Haaheim
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 */

import React, { Component, PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

const Todo = ({ onClick, completed, text }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <Checkbox
      name="StylesOverridingInlineExample"
      label=""
      checked={completed}
      onClick={onClick}
      style={{
        display: 'inline-block',
        width: '',
        margin: '0 0',
        border: '2px solid #FF9800',
        backgroundColor: '#ffd699',
        verticalAlign: 'center',
      }}
    />
    <TextField
      hintText="Full width"
      fullWidth={false}
      value={text}
      disabled={completed}
      style={{
        border: '2px solid #FF9800',
      }}
    />
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
