import { createStore, applyMiddleware } from 'redux'
import reducer from './redux/Reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

//thunk maneja las peticiones asincronas

//composeWithDevTools es para poder ver el estado en el browser con "ReduxDevTools" 
//reduxdevtools: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es
//no es obligatorio descargado pero puede ayudar a ver como se maneja el estado
//apretan f12 en el navegador y aparece entre las opciones para elegir console, elements y sources

//applyMiddleware hace que todas las funciones que son llamadas primero pasen por el middleware de thunk
//antes de terminar de ser ejecutadas y no genere errores de funciones asincronas

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store