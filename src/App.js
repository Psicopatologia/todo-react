import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import './styles/App.scss';

const defaultTodos = [
  {text: "Comer", completed: false},
  {text: "Dormir", completed: false},
  {text: "Bailar", completed: false},
  {text: "Contar", completed: true},
]

function App(props) {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchText, setSearchText] = React.useState('');
  let searchedTodos = [];
  if (searchText.length < 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter (todo => {
      const todoText = todo.text.toLowerCase();
      const searchValue = searchText.toLowerCase();
      return todoText.includes(searchValue);
    })
  }

  const onComplete = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const tempTodos = [...todos];
    tempTodos[todoIndex].completed = true;
    setTodos(tempTodos);
  }

  const onDelete = (text) => {
    const tempTodos = todos.filter(todo => todo.text !== text);
    setTodos(tempTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter totalTasks={todos.length} completedTasks={todos.filter(task=>task.completed).length} />
      <TodoSearch
        searchText={searchText}
        setSearchText={setSearchText}        
      />

     <TodoList>
        { searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            check={todo.completed}
            onComplete = {() => onComplete(todo.text)}
            onDelete = {() => onDelete(todo.text)}
          />
      ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
