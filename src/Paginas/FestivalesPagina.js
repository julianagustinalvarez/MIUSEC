import React from "react";
import ListaFestivales from "./COMPONENTES/ListaFestivales"


export default class FestivalesPagina  extends React.Component {
        
    festivales = [
        {
            nombre: 'Tomorrowland',
            img: '/img/tl.jpg',
            descripcion: 'Tomorrowland es un festival de música electrónica de baile celebrado anualmente en la localidad de Boom (Flandes, Bélgica). El festival es organizado por las empresas propias del festival (We Are One World y Tomorrowland Foundation) en conjunción con la promotora estadounidense LiveStyle, y se calcula que anualmente acuden más de 400.000 personas de casi 200 nacionalidades distintas.Es oficialmente el festival más grande del planeta.',        
            fecha: '12 de Octubre de 2023 (Brasil)',
            enlace: 'https://www.tomorrowland.com/en/festival/tickets',
        },
    {
        nombre: 'Lollapalooza',
        img: '/img/lp.jpg',
        descripcion: 'Lollapalooza​ es un festival musical de los Estados Unidos que originalmente ofrecía bandas de rock alternativo, indie y punk rock; también hay actuaciones cómicas y de danza. Concebido en 1991 por Perry Farrell, cantante de Jane Addiction, Lollapalooza se realizó anualmente hasta 1997 y fue revivido en 2003.',
        fecha: '15 de Marzo de 2024 (Argentina)',
        enlace: 'https://www.lollapaloozaar.com/',
    },
    {
        nombre: 'Roger Waters',
        img: '/img/rw.jpg',
        descripcion: 'George Roger Waters (Surrey, Inglaterra, 6 de septiembre de 1943),​ más conocido como Roger Waters, es un músico y compositor británico, cofundador de la banda Pink Floyd, considerada una de las más influyentes en la historia de la música moderna.',
        fecha: '17 de Noviembre de 2024 (Uruguay)',
        enlace: 'https://accesoya.com.uy/events/roger-waters',
    },
]
    
        render() {
                return (
                    <>
                    <div > <h2> Festivales </h2>
                    <ListaFestivales festivales={this.festivales} />
                    </div>
                    </>
                );
            }
        }
    