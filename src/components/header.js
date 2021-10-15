import React from 'react'

const Header = () => {
    const line = {
        color: "red",
        backgroundColor: "grey",
    }
    return (
        <div className="row m-0 p-0 ml-lg-5">
            <h1 id="title" className="col-12 mt-lg-4 text-white">Star wars characters</h1>
            <hr align="left" className="col-12 col-lg-7 m-0 p-0" style={line}/>
      </div>
    )
}

export default Header
