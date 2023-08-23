import React from "react";

export default class ContactoPagina  extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            mensaje: ''
        }
        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this);
    }

    submitted(event) {
        alert ("Gracias por contactarnos " + this.state.nombre)
    }

    changed(event){
        this.setState({
            nombre: event.target.value
        })
    }

    render() {
        return (
            <> 
            <h2>Contacto </h2>
            <form onSubmit={this.submitted}>
               <div className="form-group mt-2">
                    <label>Nombre</label>
                    <input type="text" className="form-control" onChange={this.changed} />
                    </div>
                <div className="form-group mt-2">
                    <label>Mensaje</label>
                    <textarea className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary mt-3">Enviar</button>
                </form>
            </>
           
        );
    }
}