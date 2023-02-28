import { useEffect, useState } from 'react';
import { ToDoForm } from './ToDoForm/ToDoForm';
import { ToDoList } from './ToDoList/ToDoList';

export const App = () => {
  const [list, setList] = useState(
    () => JSON.parse(localStorage.getItem('list')) || []
  );

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const addToDo = data => {
    const newToDo = {
      id: `${list.length + 1}.`,
      ...data,
    };

    setList(prevState => [...prevState, newToDo]);
  };

  return (
    <>
      <ToDoForm addToDo={addToDo} />
      <ToDoList list={list} />
    </>
  );
};
