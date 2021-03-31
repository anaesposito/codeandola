import "./App.css";
import {useSelector, useDispatch} from 'react-redux'
import {login} from './redux/actionCreator'

function App() {
  //accedemos al estado de redux
  const user = useSelector(state => state)
  //funcion de redux para que las funciones las tome el middleware y vayan al store cuando se ejecuten
  const dispatch = useDispatch()

  const handleUser = () => {
    dispatch(login('email','pass'))
  }

  return (
    <div className="App">
      <h1>CODEANDOLA</h1>
      <button onClick={handleUser}>INGRESAR</button>
      <button onClick={() => console.log(user)}>MOSTRAR EN CONSOLA</button>
    </div>
  );
}

export default App;
