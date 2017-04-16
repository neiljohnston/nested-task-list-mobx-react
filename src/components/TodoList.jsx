/**

  Name: /src/components/TodoList.js

  Description: This creates a todo list given todos.

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React from 'react';
import { observer } from 'mobx-react';

import { List } from 'material-ui/List';

import Todo from './Todo';


@observer class TodoList extends React.Component {

  componentDidMount() {
    if (this.props.store.demoMode) {
      this.cheesyDemo();
    }
  }

  // A somewhat cheesy demo that adds instructions to the task list every
  // 1.5 seconds. Disabled by setting demoMode = false in the TodoListStore.
  cheesyDemo() {
    function setTimeouts(arrayOfFunctions, period) {
      let counter = 0;
      // queues up functions every `period` milliseconds
      for (const f of arrayOfFunctions) {
        setTimeout(f, counter);
        counter += period;
      }
    }

    const { addTodo } = this.props.store;

    setTimeouts([
      () => { addTodo('Welcome to this nested task list!'); },
      () => { addTodo('You\'ll find it quite intuitive. Just type!'); },
      () => { addTodo('You can add a new item by pressing enter.').indent(); },
      () => {
        const n = addTodo('Indent/unindent with tab/shift+tab.');
        n.indent();
        n.indent();
      },
      () => { addTodo('Move an item up/down with cmd+up/cmd+down.').indent(); },
      () => { addTodo('Delete an empty line with backspace, or click the trashcan.'); },
      () => { addTodo('Enjoy!'); },
    ],
    1500);
  }


  render() {
    const { filteredTodos, addTodoAfter } = this.props.store;

    const items = filteredTodos.map((todo, index) => (
      <Todo
        key={todo.id}
        store={this.props.store}
        node={todo}
        depth={todo.depth}
        completed={todo.completed}
        text={todo.text}
        arrayIndex={index}
        toggle={todo.toggle}
        deleteSelf={todo.delete}
        addAfter={() => addTodoAfter(todo)}
        indent={todo.indent}
        unindent={todo.unindent}
        update={todo.update}
        moveUp={todo.moveUp}
        moveDown={todo.moveDown}
      />
    ));

    return (
      <List>
        {items}
      </List>
    );
  }
}

export default TodoList;
