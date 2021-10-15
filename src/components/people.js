import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "../styles/people.css";
import { addFavourite, addFav, removeFav, removeFavourite, existFav, showStar} from '../redux/actions/favourite';

import _ from 'lodash';

const People = (props) => {
    let data = props.data;
    const verticalAlign = {
        width: "1px",
        backgroundColor: "grey"
    }

    return (
        <div className="d-flex align-items-center">
            <div>        
                <div className="d-flex align-items-center">
                    <span id="name">{data.name}</span>
                    <FontAwesomeIcon style={{color: "yellow"}} icon={faStar} className={showStar(data)}/>
                </div>
                <div className="d-flex">
                    <span>{data.gender}</span>
                    <div style={verticalAlign} className="mx-1" />
                    <span>Birth date: {data.birth_year}</span>
                </div>
            </div>
        </div>
    )
}

export default People
