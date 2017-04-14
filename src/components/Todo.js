/************************************************

  Name: /src/components/Todo.js

  Description: This is an individual todo.

  TODO:
  - Implement hierarchy/indenting/child todos.
  - Implement navigation by up/down arrows, and indentation with tab/shift+tab.


  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React, { PropTypes, Component } from 'react';
import { observer, inject } from 'mobx-react';

import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';


const iconStyles = {
  margin: 5,
}


@inject('store') @observer class Todo extends Component {

  // Give focus to the most recently created todo item.
  componentDidMount() {
    this.textFieldRef.focus();
  }

  render() {
    console.log('todo props: ', this.props);

    const {
      onClick,
      onDelete,
      onUpdate,
      onReturnPress,
      completed,
      text,
    } = this.props;

    return (
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
          name=""
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
          ref={ (input) => { this.textFieldRef = input } }
          disabled={completed}
          onChange={ (e, newValue) => {
            console.log("e, new value: ", e, newValue);
            onUpdate(newValue);} }
          onKeyUp={ (e) => {
            e.preventDefault();
            console.log("Text field keyUp: ", e.which);
            if (e.which === 13) {  // enter key
              this.props.store.addTodo();
            }
          }}
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
  }
}

// Todo = connect()(Todo);

// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// //  onType: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Todo;
