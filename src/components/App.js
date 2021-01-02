import React from 'react';
import AddTodo from '../connectors/AddTodo-connector';
import VisibleTodoList from '../connectors/VisibleTodoList';
import Footer from './Footer';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;