import React, { useState } from 'react';
import LMain from "../layouts/LMain";
import todos from "../data/todos.json";

export default function TaskList(props) {
  const [taskList, setTaskList] = useState(todos);

  const handleToggleComplete = (taskId) => {
    // Encuentra la tarea correspondiente y cambia el estado `completed`
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTaskList(updatedTaskList);
  };

  const [menor, setMenor] = useState(0);
  const [mayor, setMayor] = useState(10);

  const handlePagePlus = () => {
    setMenor(menor + 10);
    setMayor(mayor + 10);
  };

  const handlePageMinus = () => {
    if (menor >= 10) {
      setMenor(menor - 10);
      setMayor(mayor - 10);
    }
  };

  return (
    <LMain>
      <h1>Product list</h1>
      <ul>
        {taskList.slice(menor, mayor).map((p) => (
          <li key={p.id}>
            {p.title}
            {p.completed ? "Completado" : "Pendiente"}
            <button onClick={() => handleToggleComplete(p.id)}>
              Cambiar Estado
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handlePageMinus}>Pagina Anterior</button>
      <button onClick={handlePagePlus}>Pagina Siguiente</button>
    </LMain>
  );
}
