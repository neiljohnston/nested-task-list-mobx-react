/**
  Name: /src/actions/index.js

  Description: Creates redux actions.

  NB: Actions are effectively wrappers for the objects that dispatch() takes.
  They simplify the process of calling dispatch by abstracting you from the
  structure/content of the particular action we're calling.

  TODO:

  This is a copy of/reworking of the redux example at http://redux.js.org/docs/basics/ExampleTodoList.html

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

***** */


let nextTodoId = 0
export const addTodo = (text) => {
 return {
   type: 'ADD_TODO',
   id: nextTodoId++,
   text
 }
}

export const setVisibilityFilter = (filter) => {
 return {
   type: 'SET_VISIBILITY_FILTER',
   filter
 }
}

export const toggleTodo = (id) => {
 return {
   type: 'TOGGLE_TODO',
   id
 }
}

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id
  }
}
