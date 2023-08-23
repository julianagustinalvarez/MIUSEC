import React from "react";
import Festival from "./Festival";

export default class ListaFestivales extends React.Component {
    constructor(props) {
        super (props);
         }

    render (){
        return(
            <>
        {this.props.festivales.map((festival) => (
            <Festival nombre={festival.nombre}  img={festival.img} descripcion={festival.descripcion} fecha={festival.fecha} enlace={festival.enlace}/>
        
        ))}
            
            
            </>
        );
    }
}