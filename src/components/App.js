import React from 'react';
import { AppUI } from './AppUi';
import { useLocalStorage } from '../hooks/useLocalStorage';

function App(props) {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchText, setSearchText] = React.useState('');

  let searchedTodos = [];

  if (searchText.length < 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchValue = searchText.toLowerCase();
      return todoText.includes(searchValue);
    })
  }

  const totalTasks = todos.length;
  const completedTasks = todos.filter(task => task.completed).length;

  const onComplete = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const tempTodos = [...todos];
    tempTodos[todoIndex].completed = true;
    saveTodos(tempTodos);
  }

  const onDelete = (text) => {
    const tempTodos = todos.filter(todo => todo.text !== text);
    saveTodos(tempTodos);
  }

  return (
    <AppUI
      totalTasks={totalTasks}
      completedTasks={completedTasks}
      searchText={searchText}
      setSearchText={setSearchText}
      searchedTodos={searchedTodos}
      onComplete={onComplete}
      onDelete={onDelete}
    />
  );
}

export default App;
