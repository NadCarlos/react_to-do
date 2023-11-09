import MainLayout from "../layouts/MainLayout"
import { useTheme } from '../components/ModeContext';
import { useUser } from '../components/UserContext';


//Home Page
export default function Home() {
  
  //Handle darkmode
  const { isDarkMode, toggleDarkMode } = useTheme();
  //Username
  const { username } = useUser();

  return (
    <MainLayout>
      <div className={`h-screen w-screen flex items-middle justify-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-md`}>
        <div className="text-center">
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Bienvenido {username}</h1>
          <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Iniciaste Sesión con éxito!</h3>
          <h4 className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Ingresa a "Tasks" para comenzar o a "Contact" para soporte</h4>
        </div>
      </div>
    </MainLayout>
  )
}