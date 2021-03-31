export const LOGEAR_USUARIO = "LOGEAR_USUARIO"
//se suelen hacer constantes para no tener errores al poner el nombre del type


export const login = (email, pass) => dispatch => {
    //logica de la función
    
    return dispatch({
        type: LOGEAR_USUARIO,
        payload: {id: 1}
    })
}