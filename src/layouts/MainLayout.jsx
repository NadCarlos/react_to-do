import Menu from "../components/Menu";


//Main layout
export default function MainLayout({ children, isDarkMode }) {
    const navClasses = `bg-${isDarkMode ? 'gray-900' : 'white'} border-${isDarkMode ? 'gray-700' : 'gray-200'}`;
  
    return (
      <div>
        <nav className={`border ${navClasses}`}>
          <Menu />
        </nav>
        <div>
          {children}
        </div>
      </div>
    );
  }
