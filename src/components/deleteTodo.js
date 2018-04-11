import React from 'react'
import PropTypes from 'prop-types'

const DeleteTodo = ({ deleteTodo}) => (
  
    <button className="delete-btn" onClick={deleteTodo}>delete</button>
)

DeleteTodo.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default DeleteTodo