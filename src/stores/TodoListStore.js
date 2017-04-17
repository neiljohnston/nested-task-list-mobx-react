/**

  Name: /src/TodoListStore.js

  Description: This is the primary mobx store for our app which instantiates
  and manages the todo tree.

  TODO:


  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import { observable, computed, action } from 'mobx';

import TodoNode from './TodoNode';

export class TodoListStore {

  // can be SHOW_ALL, SHOW_ACTIVE or SHOW_COMPLETED
  @observable visibilityFilter = 'SHOW_ALL';
  @observable demoMode = true;
  @observable todoRoot;

  constructor() {
    this.todoRoot = new TodoNode(); // parent is undefined
  }

  // returns a 'flattened' array of the todo tree.
  @computed get todos() {
    // recursive function to flatten children
    const flattenChildren = (startNode) => {
      let result = [];

      if (!startNode.isRoot) {
        result.push(startNode);
      }
      for (const n of startNode.children) {
        result = result.concat(flattenChildren(n));
      }
      return result;
    };
    // flattenChildren = action(flattenChildren);
    return flattenChildren(this.todoRoot);
  }

  @computed get filteredTodos() {
    switch (this.visibilityFilter) {
      case 'SHOW_ALL':
        return this.todos;
      case 'SHOW_ACTIVE':
        return this.todos.filter(t => t.completed === false);
      case 'SHOW_COMPLETED':
        return this.todos.filter(t => t.completed === true);
      default:
        throw new Error('Invalid filter.');
    }
  }

  @action.bound
  findNodeById(id, startNode = this.todoRoot) {
    for (const n of startNode.children) {
      if (n.id === id) {
        return n;
      }
      // Recurse down into n's children
      const result = this.findNodeById(id, n);
      if (result) {  // if result is not undefined
        return result;
      }
    }
    // if nothing was found, return undefined
    return undefined;
  }

  // Eliminates need for error checking in users of this method
  @action.bound
  findNodeByIdSafe(id) {
    const node = this.findNodeById(id);
    if (typeof node === 'undefined') {
      throw new Error(`No TodoNode with id ${id}`);
    }
    return node;
  }

  // Sets focus on the node that is at location curNode + delta in the
  // filtered (aka visible) list.
  @action.bound
  focusNode(curId, delta) {
    const filteredList = this.filteredTodos;
    const curIndex = filteredList.findIndex(n => n.id === curId);
    if (curIndex === -1) {
      return;
    }
    const newIndex = curIndex + delta;
    if (0 <= newIndex && newIndex < filteredList.length) {
      filteredList[newIndex].getsFocus = true;
    }
  }

  // May just use this for debugging.
  @action.bound
  addTodo(text = '') {
    const newNode = new TodoNode(this.todoRoot, text);
    this.todoRoot.children.push(newNode);
    return newNode;
  }

  @action.bound
  addTodoAfter(node, text = '') {
    const newNode = new TodoNode(node.parent, text);
    node.parent.children.splice(node.index + 1,
                                0, // insert, rather than overwrite
                                newNode);
    return newNode;
  }

  @action.bound
  deleteTodo(id) {
    // this could also be accomplished by
    // node.parent.children.splice(node.index, 1)
    // though .splice has been funky in other instances with mobx
    const node = this.findNodeByIdSafe(id);
    node.parent.children.remove(node);
  }
}

export default new TodoListStore();
