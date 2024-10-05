import React from 'react';
import './TodoItem.css';

interface TodoItemProps {
  todo: { 
    id: number; 
    text: string;
     isCompleted: boolean
     };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
