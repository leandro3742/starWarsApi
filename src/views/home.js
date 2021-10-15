/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import '../styles/Home.css';
import Header from '../components/header';
import Alert from '../components/alert';
import People from '../components/people';
import Spinner from '../components/spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { tryGetPeople } from '../redux/actions/listPeople';
import { openAlert } from '../redux/actions/alert';
import { saveIndex } from '../redux/actions/deletePerson';
import { existFav, possibleFav } from '../redux/actions/favourite';
import { loadProfile, sendProfile } from '../redux/actions/profile';
var _ = require('lodash');

const Home = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
  
    const [showAlert, setShowAlert] = useState("d-none");
    const [showSpinner, setShowSpinner] = useState("d-none");
    const [array, setArray] = useState();

    useEffect(() => {
      if(state.loading){
        setShowSpinner("d-flex")
      }
      else
        setShowSpinner("d-none")
    }, [state.loading])
    
    useEffect(() => {
      if(state.result === undefined)
        dispatch(tryGetPeople())
    }, [])
  
    useEffect(() => {
      if(!state.alert){
        setShowAlert("d-none")
      }
      else{
        setShowAlert("d-flex")
      }
    }, [state])
  
    const deletePerson = (index, elem) => {
      saveIndex(index)
      if(existFav(elem)){
        possibleFav(elem)
        // dispatch(removeFavourite());
      }
      dispatch(openAlert());
  
    };
    useEffect(() => {
      setArray(state.result)
    }, [state.result])
  
    const filter = () => {
      if(array === state.result){
        setArray(state.favourites)
      }
      else{
        setArray(state.result)
      }
    }
    const getProfile = (value) =>{
        sendProfile(value);
        dispatch(loadProfile())
    }
    return (
      <React.Fragment>
        <div style={{position: "absolute", zIndex: "1", width: "100%", height: "100%"}} className={"justify-content-center align-items-center " + showAlert} >
          <Alert />
        </div>
        <div style={{position: "absolute", zIndex: "2", width: "100%", height: "100%"}} className={"justify-content-center align-items-center " + showSpinner} >
          <Spinner />
        </div>
        <div className="m-0">
            <Header />
            <div className="body row mt-4 m-0 p-0">
              <div className="col-12 d-flex justify-content-center">
                <button onClick={filter} className="btn py-2 btn-outline-light">Filtrar por favoritos</button>
              </div>
              <div className="m-0 col-12 row d-flex justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 row">
                  {_.map(array,(elem, iterator) => {
                    return(
                      <div key={iterator} className="d-flex justify-content-center col-12 m-0 col-md-6 my-3">
                        <div className="btn buttonDelete" onClick={()=>deletePerson(iterator, elem)}><b className="">X</b></div>
                        <Link style={{textDecoration: "none"}} to="/profile" onClick={()=>getProfile(elem)}><People data={elem} state={state} dispatch={dispatch}/></Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center col-12 col-lg-4 m-auto">
              <button style={{outline:"none"}} className="btn d-flex align-items-center">
                <FontAwesomeIcon className="ml-3 mr-2" style={{color: "white"}} icon={faCaretLeft} size="2x"/>
                <span className="button">Anterior</span>
              </button>
              <button className="btn d-flex align-items-center">
                <span className="button">Siguiente</span>          
                <FontAwesomeIcon className="mr-3 ml-2" style={{color: "white"}} icon={faCaretRight} size="2x"/>
              </button>
            </div>
        </div>
      </React.Fragment>
    );
  }
  
export default Home
