//importamos las constantes para no tener errores
import {LOGEAR_USUARIO} from './actionCreator'

const initialState = {
    user: {}
}

//empieza con el estado inicial y luego va tomando el del store
//la accion que llega es la despachada desde el actionCreator
//esta funcion Retorna el nuevo estado segun la accion realizada
export default function reducer(state = initialState, action){
    if(action.type === LOGEAR_USUARIO){
        return {
            user: action.payload
        }
    }
    /* if(action.type === x){
        return{
            //// se usa el spread operator (...) para que recupere todo el estado aunque no lo cambiemos
            ...state,          
            cosaQueQuieroCambiar: action.payload
        }
    } */
}