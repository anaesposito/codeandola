import "./App.css";
import {useSelector, useDispatch} from 'react-redux'
import {login} from './redux/actionCreator'
import Footer from './components/Footer/Footer'

import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        NavBar
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <h1>CODEANDOLA</h1>
            <button onClick={handleUser}>INGRESAR</button>
            <button onClick={() => console.log(user)}>MOSTRAR EN CONSOLA</button>
          </div>
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
        <Route path="/frontend" exact>
            Front
        </Route>
        <Route path="/backend" exact>
            Back
        </Route>
        <Route path="/cualquiera" exact>
            Probando PR....
        </Route>
        <Route>
            Error 404
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
