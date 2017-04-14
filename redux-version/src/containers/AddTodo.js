/**
  Name: /src/containers/AddTodo.js

  Description: Box to add a todo.

  TODO:

  This is a copy of/reworking of the redux example at
  http://redux.js.org/docs/basics/ExampleTodoList.html

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

***** */


import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
  buttonStyle: {
    marginRight: 20,
  },
};

let AddTodo = ({ dispatch }) => {

  return (
    <FloatingActionButton
      style={styles.buttonStyle}
      onTouchTap={e => {
        e.preventDefault()
        dispatch(addTodo(''))
      }}
      >
      <ContentAdd />
    </FloatingActionButton>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
