import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import './styles/App.scss';

const todos = [
  {text: "Comer", completed: false},
  {text: "Dormir", completed: false},
  {text: "Bailar", completed: false},
  {text: "Contar", completed: true},
]

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter totalTasks={todos.length} completedTasks={todos.filter(task=>task.completed).length} />
      <TodoSearch />
      
     <TodoList>
        { todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} check={todo.completed} />
      ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
