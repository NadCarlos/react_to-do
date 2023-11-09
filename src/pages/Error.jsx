import { Link } from "react-router-dom";

//Unexpected error page
export default function Error(){
    return(
        <div className="text-center">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Error: Esta pagina no se encuentra disponible</h1>
            <Link to='/' className="text-blue-500 hover:underline">Volver a Home</Link>
        </div>
    )
}