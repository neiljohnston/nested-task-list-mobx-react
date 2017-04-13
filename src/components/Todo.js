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

import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';


const iconStyles = {
  margin: 5,
}

const Todo = ({ onClick, onDelete, onUpdate, completed, text, dispatch }) => (
  <ListItem
    disabled={true}
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      padding: 5,
      alignItems: 'center',
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
        margin: '0',
        marginLeft: 10,
        verticalAlign: 'center',
      }}
    />
    <TextField
      hintText="Enter text here"
      fullWidth={false}
      value={text}
      disabled={completed}
      onChange={ (e, newValue) => {
        console.log("e, new value: ", e, newValue);
        onUpdate(newValue);} }
      style={{
        margin: 0,
        display: 'inline-block',
        flexGrow: 2,
      }}
    />
    <IconButton
      onTouchTap={onDelete}
      tooltip="Delete Todo">
      <FontIcon className="material-icons" style={iconStyles} >delete</FontIcon>
    </IconButton>
  </ListItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
//  onType: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
