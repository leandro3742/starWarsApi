import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { closeAlertEdit } from '../redux/actions/alertEdit';
import { deletePerson } from '../redux/actions/deletePerson';

const AlertEdit = () => {
    let style = {
        width: "350px",
        backgroundColor: "white"
    }
    const dispatch = useDispatch();

    return (
        <div style={style} className="alert" role="alert">
            <div className="text-center">
                <span style={{color: "black", fontSize: "21px"}}><b>Tienes cambios sin guardar </b></span><br/>
                <span style={{color: "black"}}>Si abandonasla pagina sin guardar perderas los cambios realizados</span>
            </div>
            <div className="mt-3 d-flex justify-content-around">
                <button onClick={()=>dispatch(closeAlertEdit())} className="btn btnCancelar">Cancelar</button>
                <Link to="/" onClick={()=>dispatch(closeAlertEdit())}><button className="btn btnBorrar">Abandonar pagina</button></Link>
            </div>
        </div>
    )
}

export default AlertEdit
