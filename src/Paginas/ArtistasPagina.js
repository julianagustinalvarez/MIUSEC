import React from "react";
import ListaArtistas from "./COMPONENTES/ListaArtistas";

export default class ArtistasPagina extends React.Component {

    artistas = [
        {
            nombre: 'Nirvana',
            img: '/img/nirvana.jpg',
            descripcion: 'Nirvana fue una banda de rock estadounidense formada en Aberdeen, Washington, en 1987. Fundada por el cantante y guitarrista Kurt Cobain y el bajista Krist Novoselic, la banda pasó por una sucesión de bateristas, sobre todo Chad Channing, y luego reclutó a Dave Grohl en 1990. El éxito de la banda popularizó el rock alternativo y, a menudo, se los mencionaba como la banda de proa de la Generación X. Su música mantiene un seguimiento popular y continúa influyendo en la cultura del rock moderno.'        },
        {
            nombre: 'Mac Miller',
            img: '/img/macmiller.jpg',
            descripcion: 'Malcolm James McCormick (Pittsburgh, Pensilvania; 19 de enero de 1992-Studio City, California; 7 de septiembre de 2018),1​ más conocido por su nombre artístico Mac Miller,2​ fue un rapero, cantante y productor discográfico estadounidense.Miller comenzó su carrera en la escena hip-hop de Pittsburgh en 2007, a la edad de quince años. En 2010, firmó un contrato discográfico con el sello independiente Rostrum Records y lanzó sus innovadores mixtapes K.I.D.S. (2010) y Best Day Ever (2011). Su primer álbum de estudio, Blue Slide Park (2011), se convirtió en el primer álbum de debut distribuido de forma independiente en encabezar el Billboard 200 desde 1995.'
            
        },
        {
            nombre: 'Pink Floyd',
            img: '/img/pink.jpg',
            descripcion: 'Pink Floyd es una banda de rock británica, fundada en Londres en 1965. Considerada un icono cultural del siglo XX y una de las bandas más influyentes, exitosas y aclamadas en la historia de la música popular, obtuvo gran popularidad dentro del circuito underground gracias a su música psicodélica y espacial, que con el paso del tiempo evolucionó hacia el rock progresivo y el rock sinfónico adquiriendo la popularidad con la que hoy son recordados. Es conocida por sus canciones de alto contenido filosófico junto a la experimentación sonora, las innovadoras portadas de sus discos y sus elaborados espectáculos en vivo. Sus ventas sobrepasan los 280 millones de álbumes vendidos en todo el mundo,2​3​ 97,5 millones de ellos solamente en los Estados Unidos,4​5​6​ convirtiéndose en una de las bandas con más ventas en la historia.'
        },
        {
            nombre: 'Bersuit Bergarabat',
            img: '/img/bersuit.jpg',
            descripcion: 'Bersuit Vergarabat, conocidos como La Bersuit, es un grupo de rock argentino, originario del barrio de Barracas, al sur de la ciudad de Buenos Aires, formado en 1988.1​ Se hicieron notables a finales de los años noventa por combinar este género musical con ritmos latinos —como la cumbia, el tango, la murga, el reggae, el folklore y el candombe— y letras cargadas de críticas hacia el sistema político y la sociedad.Desde su primer trabajo discográfico, la obra de Bersuit Vergarabat se caracterizó por contener mensajes en contra del menemismo y críticas hacia políticos como Carlos Menem, Domingo Cavallo, Eduardo Duhalde, Carlos Ruckauf, entre otros. Las letras de sus canciones fueron censuradas y, en otros casos, los canales de televisión que transmitían sus videoclips fueron demandados y tuvieron que pagar multas por los ataques que sufrían ciertos políticos, como también por las críticas a la sociedad argentina de los 90',
},
{
    nombre: 'B.B. King',
    img: '/img/bb.jpg',
    descripcion: 'Comenzó en un coro de góspel, fue disyóquey y acabó siendo el rey del blues. Fusionó blues, jazz, swing y pop hasta convertirse en una referencia obligada para los músicos de rock por su manera de tocar la guitarra. Pero este es un resumen demasiado simple para una vida llena de matices, como era la música de B.B. King, el apodo con el que se consagró Riley B. King en su juventud. Un nombre artístico que se convirtió en leyenda tras más de 60 años de experiencia sobre los escenarios y más de 50 álbumes publicados, un éxito que ha sido reconocido con 15 premios Grammy.'
}]
    render() {
        return (
            <>
            <div > <h2> Artistas </h2>
            <ListaArtistas artistas={this.artistas} />
            </div>
            </>
        );
    }
}