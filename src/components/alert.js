import React from 'react'
import "../styles/alert.css";
import { useSelector, useDispatch } from 'react-redux'
import { closeAlert } from '../redux/actions/alert';
import { deletePerson } from '../redux/actions/deletePerson';
import { existFav, possible, removeFav, removeFavourite } from '../redux/actions/favourite';
const Alert = () => {
    let style = {
        width: "350px",
        backgroundColor: "white"
    }
    const dispatch = useDispatch();
    const deleteFunction = () => {
        if(existFav(possible)){
            removeFav(possible)
            dispatch(removeFavourite())
        }
        dispatch(deletePerson())
    }
    return (
        <div style={style} className="alert" role="alert">
            <div className="text-center">
                <span style={{color: "black", fontSize: "21px"}}><b>Seguro que quiere borrar ? </b></span><br/>
                <span style={{color: "black"}}>Si borras, la accion no se podra deshacer</span>
            </div>
            <div className="mt-3 d-flex justify-content-around">
                <button onClick={()=>dispatch(closeAlert())} className="btn btnCancelar">Cancelar</button>
                <button onClick={deleteFunction} className="btn btnBorrar">Borrar</button>
            </div>
        </div>
    )
}

export default Alert
