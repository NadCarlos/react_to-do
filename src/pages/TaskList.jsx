import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import todos from '../data/todos.json';
import { useTheme } from '../components/ModeContext';


export default function TaskList(props) {

  //Handle tasks
  const [taskList, setTaskList] = useState(todos);
  const handleToggleComplete = (taskId) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTaskList(updatedTaskList);
  };

  //Handle pages
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 9;
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = taskList.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(taskList.length / tasksPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  //Handle darkmode
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <MainLayout>
      <div className={`h-screen w-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-md`}>
        <div className={`text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
          <h1 className="text-4xl font-bold mb-6">Lista de Tareas</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 grid-rows-2 gap-10">
            {currentTasks.map((p) => (
              <div key={p.id} className={`p-10 border rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <span className="text-lg">{p.title}</span>
                <div className="flex items-center mt-2">
                  <span className={`text-${p.completed ? 'green' : 'red'}-500`}>{p.completed ? 'Completado' : 'Pendiente'}</span>
                  <div className="ml-2"></div>
                  <button
                    onClick={() => handleToggleComplete(p.id)}
                    className={`bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700`}>
                    Cambiar Estado
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 space-x-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`bg-gray-300 text-gray-600 p-2 rounded-md hover:bg-gray-400 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
              disabled={currentPage === 1}>
              Página Anterior
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`bg-gray-300 text-gray-600 p-2 rounded-md hover:bg-gray-400 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
              disabled={currentPage === totalPages}>
              Página Siguiente
            </button>
          </div>
        </div>
      </div>
    </MainLayout >
  );
}