import'./tecla.css';
import React from "react";


function Tecla({value,onClick}){

    const handleclick=()=>{
        onClick(value)
    }
    return(

    <button onClick={handleclick} className="btn">{value}</button>
    
    );
}

export default Tecla;