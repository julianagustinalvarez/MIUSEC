import React from "react";
import './Festival.css';

export default class Festival extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            escondido: false
        }

        this.toggleEsconder = this.toggleEsconder.bind(this);
    }

    toggleEsconder() {
        this.setState(prevState => ({
            escondido: !prevState.escondido
        }));
    }

    render(){
        return(
            <div className="row py-3 ">
                        <div className="col-12 d-flex align-items-center">
                        <img src={this.props.img} alt={this.props.nombre} className="band-thumb"  />
                        <div className="pl-5">
                            <h2>{this.props.nombre}</h2>
                            <p>{this.props.descripcion}</p>
                            <p>{this.props.fecha}</p>

                            <button className="btn btn-danger px-4" onClick={this.toggleEsconder}> 
                            {this.state.escondido ? "Mostrar" : "Esconder" } 
                            </button>
                            <a className="btn btn-primary mx-2" href={this.props.enlace + ""} target="_blank"> Comprar entradas </a>
                            
                            </div>
                    </div>
                </div>
)}}