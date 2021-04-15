import "./App.css";

// Importaciones externas
import { useSelector, useDispatch } from 'react-redux'

//Importaciones Internas
import { login } from './redux/actionCreator'

import { BrowserRouter, Route, Switch } from "react-router-dom";

// pages:
import Signup from './pages/Signup'
import Login from './pages/Login'

//Componentes
import NavBar from "./components/NavBar"


function App() {
  //accedemos al estado de redux
  const user = useSelector(state => state)
  //funcion de redux para que las funciones las tome el middleware y vayan al store cuando se ejecuten
  const dispatch = useDispatch()

  const handleUser = () => {
    dispatch(login('email','pass'))
  }

  return (
    <BrowserRouter>
        <NavBar />
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <h1>CODEANDOLA</h1>
            <button onClick={handleUser}>INGRESAR</button>
            <button onClick={() => console.log(user)}>MOSTRAR EN CONSOLA</button>
          </div>
        </Route>
        <Route path="/signup" exact>
            <Signup/>
        </Route>
        <Route path="/login" exact>
            <Login/>
        </Route>
        <Route path="/about" exact>
            About
        </Route>
        <Route path="/forum" exact>
            Foro
        </Route>
        <Route path="/contact" exact>
            Contacto
        </Route>
        <Route path="/fq" exact>
            Preguntas frecuentes
        </Route>
        <Route path="/tc" exact>
            Terminos y condiciones
        </Route>
        <Route>
            Error 404
        </Route>
      </Switch>
      Footer
    </BrowserRouter>

  );
}

export default App;
