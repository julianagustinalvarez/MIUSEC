import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component{

    render(){
        return (
            <div className="row bg-light fixed-top px-4 py-2 shadow">
                <div className="col-12 d-flex align-items-center">
                 <h1> MIUSEC  </h1>
                 <Link to="/" className="mx-3">Inicio</Link>
                 <Link to="/tendencias" className="mx-3">Tendencias de Mac Miller</Link>
                 <Link to="/artistas" className="mx-3">Artistas</Link>
                 <Link to="/festivales" className="mx-3">Festivales</Link>
                 <Link to="/contacto" className="mx-3">Contacto</Link>


                </div>
            </div>
           
        );
    }
}