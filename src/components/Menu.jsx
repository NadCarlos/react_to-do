import { Link } from "react-router-dom"

export default function Menu(){
    return(
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TO-DO</span>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false"></button>
        <button class="flex items-center">
            <Link to='/'> Home</Link>
        </button>
        <button> 
            <Link to='/contact'>Contact</Link>
        </button>
        <button> 
            <Link to='/tasks'>Tasks</Link>
        </button>
        <button> 
            <Link to='/login'>Login</Link>
        </button>
      </div>
    )
  }
