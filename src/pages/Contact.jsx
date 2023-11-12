import MainLayout from "../layouts/MainLayout"
import { useTheme } from '../appContext/ModeContext';


//Contact Page
export default function Contact() {
  //Handle darkmode
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <MainLayout>
      <div className={`h-screen w-screen flex items-middle justify-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-md`}>
        <div className={`max-w-md mx-auto p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-md rounded-md`}>
          <h2 className="text-2xl font-semibold mb-4">Formulario de Contacto</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="nombre" className={`block ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Nombre</label>
              <input 
                type="text" 
                id="nombre" 
                className={`w-full p-2 border rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`} 
                placeholder="Usuario" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className={`block ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Correo Electrónico</label>
              <input 
                type="email" 
                id="email" 
                className={`w-full p-2 border rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`} 
                placeholder="tu-email@example.com" />
            </div>
            <div className="mb-4">
              <label htmlFor="mensaje" className={`block ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Mensaje</label>
              <textarea 
                id="mensaje" 
                rows="4" 
                className={`w-full p-2 border rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`} 
                placeholder="Escribe tu mensaje aquí">
              </textarea>
            </div>
            <button type="submit" className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 ${isDarkMode ? 'dark-button' : ''}`}>Enviar</button>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}