import LMain from "../layouts/LMain"
import Protected from "../components/PrivateRoutes"


export default function Home(){
    return (
      <LMain>
        <h1>Bienvenido</h1>
        <h3>Iniciaste Sesion con exito!</h3>
        <h4>Ingresa a "Tasks" para comenzar o a "Contact" para soporte</h4>
      </LMain>
    )
  }