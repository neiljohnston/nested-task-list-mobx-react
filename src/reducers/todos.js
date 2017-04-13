/**
 * Name: /src/reducers/todos.js
 *
 * Description: Creates redux reducers.

 TODO:


 * This is a copy of/reworking of the redux example at http://redux.js.org/docs/basics/ExampleTodoList.html
 *
 * Copyright (c) 2017-present Justin Haaheim
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 */

const sampleTodosForDebug = [{
 id: -1,
 completed: false,
 text: 'Todo number 1'
},
{
 id: -2,
 completed: false,
 text: 'Todo number 2'
},
{
 id: -3,
 completed: false,
 text: 'Todo number 3'
}];

const todo = (state = {}, action) => {
  console.log(`todo reducer called. state: ${state} | action: ${action}`);
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })

    case 'UPDATE_TODO':
      console.log('Reducer case: UPDATE_TODO');
      if (state.id !== action.id) {
        return state;
      }
      let newState = {
        ...state,
        text: action.text,
      }
      console.log('New State:', newState);
      return newState;

    default:
      return state
  }
}

// Remove sampleTodosForDebug for production
const todos = (state = sampleTodosForDebug, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'DELETE_TODO':
      return state.filter(t =>
        t.id !== action.id
      )
    case 'UPDATE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
