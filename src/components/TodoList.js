/************************************************

  Name: /src/components/TodoList.js

  Description: This creates a todo list given todos.

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React from 'react';
import { observer, inject } from 'mobx-react';

import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';

import Todo from './Todo';
import TodoStore from '../TodoStore';


@observer class TodoList extends React.Component {

  render() {

    console.log(TodoStore);
    const { todos, addTodoAfter, deleteTodo } = TodoStore;
    console.log("wtf...", addTodoAfter);

    return (
      <List>
        <Subheader>Created with love by Justin Haaheim</Subheader>

        { todos.map((todo, index) => {
          console.log('map todo = ', todo.completed);
          return (<Todo
            key={todo.id}
            completed={todo.completed}
            text={todo.text}
            arrayIndex={index}
            onClick={ todo.toggle }
            onDelete={ () => deleteTodo(index) }
            onReturnPress={ addTodoAfter }
            onUpdate={ (newValue) => {
              console.log("TodoList onUpdate anon function. newValue: ", newValue);
              todo.update(newValue);
            }
            }
          />)
        }
        )
      }

      </List>
    )
  }
}

export default TodoList;
