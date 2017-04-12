/**
  Name: /src/containers/VisibleTodoList.js

  Description: Creates a TodoList populated with the correct todos based on visibility filter.

  TODO:

  This is a copy of/reworking of the redux example at http://redux.js.org/docs/basics/ExampleTodoList.html

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

***** */


import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      console.log("reached default case in getVisibleTodos. This should not happen...");
      return todos;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },

    // This adds an onTodoDelete prop to TodoList
    onTodoDelete: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

/**
  connect() here provides the store to mapStateToProps, and it provides
  dispatch to mapDispatchToProps. This is so you can add props to a component
  (TodoList in this case) that access the store or that make dispatch calls.
  This is a scalable, but somewhat confusing way to add these props to
  TodoList. The other way would be to use connect() as a decorator in TodoList.
*/
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
