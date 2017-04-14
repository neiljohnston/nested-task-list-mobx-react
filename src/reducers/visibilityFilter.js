/**
 * Name: /src/reducers/visibilityFilter.js
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


const visibilityFilter = (state = 'SHOW_ALL', action) => {
 switch (action.type) {
   case 'SET_VISIBILITY_FILTER':
     return action.filter
   default:
     return state
 }
}

export default visibilityFilter
