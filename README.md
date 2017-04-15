Nested Task List (React + MobX)
=====================

Nested Task List is a [React](https://facebook.github.io/react) -based task list (or "todo list") prototype written in JavaScript (ES6+) built with [MobX](https://mobxjs.github.io/mobx) using the [Material-UI](http://www.material-ui.com/) React component library.

See it in action: [Nested Task List (Demo)](https://rawgit.com/justinhaaheim/nested-task-list-mobx-react/master/index.html)

Project created by [Justin Haaheim](https://github.com/justinhaaheim). See his other projects at his [github](https://github.com/justinhaaheim) page.

# Features

- **Hierarchical task structure** - easily define complex tasks and projects with simple indenting to *nest* tasks within tasks.
- **Elegant interface** - [Material Design](https://material.io/) interface with smooth ui transitions for indenting and visual touch feedback for clicks/taps on input fields and buttons.
- **Intuitive UI** - tasks behave like lines in a text editor: `enter` to create a new task, `backspace` on an empty task to delete it, `cmd+up` and `cmd+down` to move tasks up and down, `tab` and `shift+tab` to indent/nest tasks under one another.
- **Smart task completion logic** - when a task is completed, all its sub-tasks are recursively completed. When a task is not-yet-complete, its parent tasks are marked not-yet-complete back to the root (ie when a project is completed its subtasks are as well).
- **Filter completed tasks** - ability to show all tasks (completed and not), active tasks (incomplete), or completed tasks.

# How to run in dev mode

From the root of the project directory:

```
npm install
npm start
open http://localhost:3000
```

Or if you're a `yarn` person:

```
yarn
yarn start
open http://localhost:3000
```

# Acknowledgements

Thanks to [Michael Weststrate](https://github.com/mweststrate) for the [mobx-react-boilerplate](https://github.com/mobxjs/mobx-react-boilerplate) scaffolding.

# License

MIT

# Contact

I enjoy hearing from people checking out my projects. Get in touch on twitter (@justinhaaheim)[https://twitter.com/justinhaaheim] or email me at `io` @ `justinh` dot `org`.

