import React from "react";
import Artista from "./COMPONENTES/Artista";
import Festival from "./COMPONENTES/Festival";
export default class InicioPagina extends React.Component {

    render() {
        return (
            <>
            <div className="container"> 
                <div className="row"> 
            <div  className="col-md-12 col-sm-6"> 
             <h2>_____________________________</h2>
            <p>Bienvenido a la pagina de musica,artistas y festivales favoritos de Agustin, dandole el primer puesto a mis elecciones para cada categoria</p>
            
           
            
      <Artista 
      nombre="Mac Miller" 
      img= "/img/macmiller.jpg"
      descripcion="Malcolm James McCormick (Pittsburgh, Pensilvania; 19 de enero de 1992-Studio City, California; 7 de septiembre de 2018),1​ más conocido por su nombre artístico Mac Miller,2​ fue un rapero, cantante y productor discográfico estadounidense.

Miller comenzó su carrera en la escena hip-hop de Pittsburgh en 2007, a la edad de quince años. En 2010, firmó un contrato discográfico con el sello independiente Rostrum Records y lanzó sus innovadores mixtapes K.I.D.S. (2010) y Best Day Ever (2011). Su primer álbum de estudio, Blue Slide Park (2011), se convirtió en el primer álbum de debut distribuido de forma independiente en encabezar el Billboard 200 desde 1995."
/>
<a className="btn btn-primary mx-2" href="http://localhost:3000/artistas" > Ver artistas </a>
    
    <Festival 
    nombre="Lollapalooza"
    img= "/img/lp.jpg"
    descripcion="Lollapalooza​ es un festival musical de los Estados Unidos que originalmente ofrecía bandas de rock alternativo, indie y punk rock; también hay actuaciones cómicas y de danza. Concebido en 1991 por Perry Farrell, cantante de Jane Addiction, Lollapalooza se realizó anualmente hasta 1997 y fue revivido en 2003."
    fecha="15 de Marzo de 2024 (Argentina)"
    enlace="https://www.lollapaloozaar.com/" />
    <a className="btn btn-primary mx-2 " href="http://localhost:3000/festivales" > Ver festivales </a>
    </div></div></div>
           
           
           
           
            </>
        );
    }
}