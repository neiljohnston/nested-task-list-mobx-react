/**
 * Name: /src/reducers/index.js
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


import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
 todos,
 visibilityFilter
})

export default todoApp
