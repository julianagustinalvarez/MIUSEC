import React from "react";
import './Artista.css';

export default class Artista extends React.Component {
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
            <div className="row py-3">
                <div className="col-12 d-flex align-items-center">
                    {!this.state.escondido && (
                        <img src={this.props.img} alt={this.props.nombre} className="band-thumb" />
                    )}
                    <div className="pl-5">
                        {!this.state.escondido && (
                            <div>
                                <h2>{this.props.nombre}</h2>
                                <p>{this.props.descripcion}</p>
                            </div>
                        )}
                        <button className="btn btn-danger" onClick={this.toggleEsconder}> 
                            {this.state.escondido ? "Mostrar" : "Esconder" } 
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}