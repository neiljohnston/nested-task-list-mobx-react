/**

  Name: /src/containers/AddTodo.jsx

  Description: Button to add a todo.

  TODO:

  This is a copy of/reworking of the redux example at
  http://redux.js.org/docs/basics/ExampleTodoList.html

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */


import React from 'react';
import { observer } from 'mobx-react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const AddTodo = observer(({ store }) => (
  <FloatingActionButton
    onTouchTap={(e) => {
      e.preventDefault();
      store.addTodo();
    }}
  >
    <ContentAdd />
  </FloatingActionButton>
));

export default AddTodo;
