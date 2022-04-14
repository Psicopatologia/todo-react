import React from 'react';
import { AppUI } from './AppUi';
import { TodoProvider } from '../context/TodoContext';

function App(props) {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
