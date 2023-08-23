import React from "react";
import './Footer.css';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
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
             <div className="bg-dark pt-4 mt-3 sticky-bottom text-secondary"> 
             <div className="container"> 
                <div className="row"> 
                {/*columna1 */}
                <div className="text-white col-md-6 col-sm-12">
                <h4 className="text-secondary"> MIUSEC ES MI MUSICA!</h4>
                <ul className="list-unstyled ml-3">
                    <li className="my-1"> <a className="text-white " href="https://redtickets.uy/busqueda?*,3,0" target="_blank">Compra de entradas a conciertos en Uruguay</a></li>
                    <li className="my-1"><a className="text-white " href="https://open.spotify.com/playlist/2qLxtzwmaWMffqcc8oNNMQ?si=20534046b6b541d7" target="_blank">Mi playlist de Spotify</a></li>
                    <li className="my-1"><a className="text-white " href="https://www.instagram.com/miuseccccc/" target="_blank">Seguinos en instagram</a></li>
                    <li className="my-1">Contacto</li>
                    <li className="my-1"   >099 899 888</li>
                    </ul>
                    <p>Todos los derechos reservados, 2023</p>

                </div>
                 {/*columna2 */}
                 <div className=" text-white col-md-6 col-sm-12">
                 <h3>Suscribete a nuestro newsletter!</h3>
            <form onSubmit={this.submitted}>
               <div className="form-group mt-2 col-md-9">
                    <input type="text" className="form-control" onChange={this.changed} />
                    <button type="submit" className="btn btn-success mt-3 mb-4 "> Suscribirme </button>
                    </div>
                
                </form>
            
                
                </div>
                </div>
             </div>
            </div>
            
            </>
    );
}
}