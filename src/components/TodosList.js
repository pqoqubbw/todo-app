import React from 'react';

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const handleDeleteTodo = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompleteTodo = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEditTodo = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id} className="list-item">
          <input
            type="text"
            disabled
            value={todo.title}
            onChange={(e) => e.preventDefault()}
            className={`list ${todo.completed ? 'complete' : ''}`}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleCompleteTodo(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEditTodo(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDeleteTodo(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
