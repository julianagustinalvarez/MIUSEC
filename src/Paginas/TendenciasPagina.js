import React from "react";

export default class TendenciasPagina  extends React.Component {


    constructor(props){
        super(props);
        this.state={
            lanzamientos: []
        }
    }
       componentDidMount(){
        fetch("https://musicbrainz.org/ws/2/artist/a0e8a1b1-5f8f-475a-a253-17415c17d0ff?inc=releases&fmt=json")
        .then( res => res.json() ) 
        .then( (result) => {
            console.log(result)
            this.setState({
                lanzamientos: result.releases
            });
        })
    }
       



    render() {
        return (
            <>
            <h2>Lanzamientos de Mac Miller</h2>
            <div className=" p-5 col-12 d-fluid align-items-center">
              <div className="row">{this.state.lanzamientos.map((lanzamiento) => (
                <ul> <li className="">{lanzamiento.title} ({lanzamiento.date})</li></ul >
        ))}
        </div></div>
            </>
           
        );
    }
}






