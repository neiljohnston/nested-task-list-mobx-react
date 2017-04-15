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

import React from 'react';
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

const INDENT_SIZE = 25;


@observer class Todo extends React.Component {

  // Give focus to the most recently created todo item.
  componentDidMount() {
    this.textFieldRef.focus();
  }

  render() {

    const {
      toggle,
      deleteSelf,
      addAfter,
      indent,
      unindent,
      moveUp,
      moveDown,
      update,
      depth,
      completed,
      text,
      node,
    } = this.props;

    // It's important for the interface to function correctly to handle
    // both keydown and keyup. In the case of tab, for example, if you just
    // handle keydown, keyup will still cause the browser to advance focus
    // to the next element.
    const handleKeyPress = (e) => {
      console.log('Text field keyUp key: ', e.which);

      switch(e.which) {
        case 13:  // enter
          e.preventDefault();
          if (e.type === 'keydown') {
            addAfter();
          }
          break;
        case 8:
          // backspace (often labeled 'delete').
          // Only deletes the todo if the text field is empty.
          if (text.length === 0) {
            e.preventDefault();
            if (e.type === 'keydown') {
              deleteSelf();
            }
          }
          break;
        case 9:
          if (!e.shiftKey) {  // tab
            e.preventDefault();
            if (e.type === 'keydown') {
              indent();
            }
            break;
          } else {  // shift+tab
            e.preventDefault();
            if (e.type === 'keydown') {
              unindent();
            }
            break;
          }
        case 38:  // up arrow
          if (e.metaKey) {  // Cmd+up / Meta+up
            e.preventDefault();
            if (e.type === 'keydown') {
              console.log('moveUp');
              moveUp();
            }
          }
          break;
        case 40:  // down arrow
          if (e.metaKey) {  // Cmd+up / Meta+up
            e.preventDefault();
            if (e.type === 'keydown') {
              moveDown();
            }
          }
          break;
        default:
          break;
      }
    }


    // the (non displaying) root node is depth 0. first non-indented level
    // is at depth 1.
    const marginLeft = (depth - 1) * INDENT_SIZE + 'pt';

    return (
      <ListItem
        disabled={true}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: 5,
          alignItems: 'center',
          marginLeft: marginLeft,
        }}
      >
        <Checkbox
          name=""
          label=""
          checked={completed}
          onClick={toggle}
          style={{
            display: 'inline-block',
            width: '',
            margin: '0',
            marginLeft: 10,
            verticalAlign: 'center',
          }}
        />
        <TextField
          hintText=""
          id={ node.id + 'textfield' }
          fullWidth={false}
          value={text}
          ref={ (input) => { this.textFieldRef = input } }
          disabled={ completed }
          onChange={ (e, newValue) => update(newValue) }
          onKeyDown={ handleKeyPress.bind(this) }
          onKeyUp={ handleKeyPress.bind(this) }
          style={{
            margin: 0,
            display: 'inline-block',
            flexGrow: 2,
          }}
        />
        <IconButton
          onTouchTap={deleteSelf}
          tooltip="Delete Todo">
          <FontIcon className="material-icons" style={iconStyles} >delete</FontIcon>
        </IconButton>
      </ListItem>
    )
  }
}

export default Todo;
