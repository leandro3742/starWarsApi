import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex flex-column align-items-center">
        <div className="spinner-grow text-light" role="status" />
       <span style={{color: "white"}} className="visually-hidden">Cargando ...</span>
    </div>
  );
};

export default Spinner;
