import React from "react";
import { Link } from "react-router-dom";
import "../styles/_characterdetail.scss"
import "../styles/App.scss"

const CharacterDetail = props => {
    if (props.character === undefined) {
        return (
            <h3>Cargando...</h3>
        )
    } else {
        return (
            <div className="detail__background">
                <div className="detail__container">
                    <div className="detail__info">
                        <img src={props.character.image} alt={props.character.name} />

                        <div className="detail__text">
                            <h1>{props.character.name}</h1>
                            <p><b>Status:</b> {props.character.status}</p>
                            <p><b>Species:</b> {props.character.species}</p>
                            <p><b>Origin:</b> {props.character.origin.name}</p>
                            <p><b>Episodes:</b> {props.character.episode.length}</p>
                        </div>
                    </div>
                    <button>
                        <Link to="/">Volver</Link>
                    </button>

                </div >
            </div>
        )
    }
}




export default CharacterDetail