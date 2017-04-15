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
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';

import Todo from './Todo';
// import TodoStore from '../TodoStore';


@observer class TodoList extends React.Component {

  render() {
    const { filteredTodos, addTodoAfter, addTodo, deleteTodo } = this.props.store;

    const items = filteredTodos.map((todo, index) => (
      <Todo
        key={todo.id}
        store={this.props.store}
        node={todo}
        depth={todo.depth}
        completed={todo.completed}
        text={todo.text}
        arrayIndex={index}
        toggle={ todo.toggle }
        deleteSelf={ todo.delete }
        addAfter={ () => addTodoAfter(todo) }
        indent={ todo.indent }
        unindent={ todo.unindent }
        update={ todo.update }
        moveUp={ todo.moveUp }
        moveDown={ todo.moveDown }
      />
    ))

    return (
      <List>
        {items}
      </List>
    )
  }
}

export default TodoList;
