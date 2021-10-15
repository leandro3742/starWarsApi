/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'
import "../styles/profile.css"
import AlertEdit from '../components/alertEdit'
import { Link } from 'react-router-dom'
import { openAlertEdit } from '../redux/actions/alertEdit'
import { savePerson, editPerson } from '../redux/actions/editPerson'
import { addFav, addFavourite, removeFav, removeFavourite } from '../redux/actions/favourite'

const Profile = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const btnBack = "< Volver al listado"    

    const [data, setData] = useState({name: "", gender: "", birth_year: "", films: 0, height: '', mass: ''})
    const [editMode, setEditMode] = useState(false);
    const [buttonText, setButtonText] = useState("Editar");
    const [showBorder, setShowBorder] = useState("");
    const [showAlert, setShowAlert] = useState("d-none");
    const [goBack, setGoBack] = useState(<div onClick={()=>dispatch(openAlertEdit())}><span>{btnBack}</span></div>)
    const [name, setName] = useState("");
    const [films, setFilms] = useState("");
    const [mass, setMass] = useState("");
    const [starColor, setStarColor] = useState("grey")
    useEffect(() => {
        if(state.profile != undefined){
            if(typeof state.profile.films != "number"){
                state.profile.films = state.profile.films.length; 
            }
            setData(state.profile)
        }
    }, [state]);
    
    useEffect(()=> {
        if(!state.alertEdit){
            setShowAlert("d-none")
        }
        else{
            setShowAlert("d-flex")
        }
    }, [state.alertEdit])

    useEffect(() => {
        _.map(state.favourites, value => {
            if(value === state.profile){
                setStarColor("yellow")
            }
        })
    }, [state.favourites])

    useEffect(() => {
        if(editMode)
            setGoBack(<div type="button" onClick={()=>dispatch(openAlertEdit())}><span>{btnBack}</span></div>)
        else
            setGoBack(<Link style={{textDecoration: "none"}} type="button" to="/"><span>{btnBack}</span></Link>)
    }, [editMode])

    const editData = () => {
        if(editMode){
            let newPerson = state.profile;
            let oldPerson = data;
            console.log(oldPerson)
            let input = document.querySelectorAll("input");
            if(name != "")
                newPerson.name = name
            if(films != "")
                newPerson.films = films
            if(mass != "")
                newPerson.mass = mass
            setShowBorder("")
            setEditMode(false)
            setButtonText("Editar")
            _.map(input, value => {
                value.setAttribute("readOnly", "readOnly")
            })
            savePerson(newPerson);
            dispatch(editPerson())
        }
        else{
            setShowBorder("1px solid white")
            let input = document.querySelectorAll("input");
            _.map(input, value => {
                value.removeAttribute("readOnly")
            })
            setEditMode(true)
            setButtonText("Guardar datos")
        }
    }
    const saveData = e => {
        e.preventDefault();
    }
    
    const buttonFavourite = () => {
        let exist = false
        _.map(state.favourites, value => {
            if(value === state.profile){
                exist = true;
                removeFav(state.profile)
                dispatch(removeFavourite())
                setStarColor("")
            }
        })
        if(!exist){
            addFav(state.profile);
            dispatch(addFavourite())
            setStarColor("yellow")
        }
    }
    return (
        <React.Fragment>
            <div style={{position: "absolute", zIndex: "1", width: "100%", height: "100%"}} className={"justify-content-center align-items-center " + showAlert} >
                <AlertEdit />
            </div>
            <Header />
            <div className="m-5">{goBack}</div>
            <form onSubmit={saveData} className="row d-flex justify-content-center m-lg-5" >
                <div className="col-6 d-flex flex-column align-items-center justify-content-center m-0 ">
                    <div className="d-flex p-1">
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center">
                                <input type="text" className="input" id="inputTitle" placeholder={data.name} name="name" style={{borderBottom: showBorder}} onChange={(e)=>setName(e.target.value)} readOnly/>
                                <div type="button" onClick={buttonFavourite}><FontAwesomeIcon style={{color: starColor}} icon={faStar} className="m-0 p-0"/></div>
                            </div>
                            <div className="">
                            </div>
                            <span className="text mt-1">{data.gender} </span>
                            <div className="">
                                <span className="text mt-1">Birth date: </span>
                                <input className="inputNoChange " placeholder={data.birth_year} name="birth_year" readOnly/>
                            </div>
                            <div className="">
                                <span className="text mt-1">Amount of films:</span>
                                <input className="input mt-1 " placeholder={data.films} name="films" style={{borderBottom: showBorder}} onChange={(e)=>setFilms(e.target.value)} readOnly/>                    
                            </div>
                            <div className="">
                                <span className="text mt-1">Mass: </span>
                                <input className="input mt-1 " placeholder={data.mass} name="mass" style={{borderBottom: showBorder}} onChange={(e)=>setMass(e.target.value)} readOnly/>
                            </div>
                        </div>
                    </div>
                    <button onClick={editData} className="btnEdit mt-4 btn btn-outline-light">{buttonText}</button>
                </div>
            </form>
          
    </React.Fragment>    
    )
}

export default Profile
