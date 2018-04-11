import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import DeleteTodo from './deleteTodo'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <ul className="item-container">
    {todos.map(todo =>
      <li className="item">
        <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        deleteTodo={()=> deleteTodo(todo.id)}
      />
      <DeleteTodo
        deleteTodo={()=> deleteTodo(todo.id)}
      />
      </li>
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
