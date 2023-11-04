import { Link } from "react-router-dom";

export default function Error404(){
    return(
        <>
        <h1>Ups!. page not found...</h1>
        <Link to='/'>Home</Link>
        </>
    )
}