/************************************************

  Name: /src/TodoStore.js

  Description: This is the primary mobx store for our app.

  TODO:


  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import { observable, computed } from 'mobx';

let nextTodoId = 0;

class Todo {
  @observable text;
  @observable id;
  @observable completed;

  toggle() {
    this.completed = !this.completed;
  }

  update(text) {
    this.text = text;
  }

  constructor(text = '') {
    this.text = text;
    this.id = nextTodoId++;
    this.completed = false;
  }
}

class TodoStore {

  // can be SHOW_ALL, SHOW_ACTIVE or SHOW_COMPLETED
  @observable visibilityFilter = 'SHOW_ALL';

  @observable todos = [];

  @computed get filteredTodos() {
    switch (this.visibilityFilter) {
      case 'SHOW_ALL':
        return this.todos;
      case 'SHOW_ACTIVE':
        return this.todos.filter( t => {
          return t.completed === false;
        })
      case 'SHOW_COMPLETED':
        return this.todos.filter( t => {
          return t.completed === true;
      })
      default:
        throw new Error('Invalid filter.');
    }
  }

  addTodo() {
    this.todos.push(new Todo());
  }

  addTodoAfter(id) {
    // I will be implementing a tree structure soon, so this will change.
    // In the meantime, just add at the end.
    this.todos.push(new Todo());
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  constructor() {
    this.todos.push(new Todo('Todo number 1!'));
    this.todos.push(new Todo('Todo number 2!'));
    this.todos.push(new Todo('Todo number 3!'));

    this.addTodo.bind(this);
    this.addTodoAfter.bind(this);
    this.deleteTodo.bind(this);

  }

}

export default new TodoStore;
