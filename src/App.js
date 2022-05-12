import TodoList from './components/TodoList';
import './App.css';
import { useState } from 'react';

function App() {
  const [first, setFirst] = useState(true);
  return     (
    <div>
      <TodoList />
    </div>
  )
;
}

export default App;
