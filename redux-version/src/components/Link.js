/**
 * Name: /src/components/Link.js
 *
 * Description: Creates a link with a callback.

 TODO:


 * This is a copy of/reworking of the redux example at http://redux.js.org/docs/basics/ExampleTodoList.html
 *
 * Copyright (c) 2017-present Justin Haaheim
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 */


import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
 if (active) {
   return <span>{children}</span>
 }

 return (
   <a href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
   >
     {children}
   </a>
 )
}

Link.propTypes = {
 active: PropTypes.bool.isRequired,
 children: PropTypes.node.isRequired,
 onClick: PropTypes.func.isRequired
}

export default Link
