import React from "react";
import { Link } from "react-router-dom"

const CharacterCard = (props) => {
    return (
        <li>
            <Link to={`/character/${props.character.id}`}>
                <img src={props.character.image} alt={props.character.name} />
                <h3>Nombre: {props.character.name}</h3>
                <h4>Especie: {props.character.species}</h4>
            </Link>
        </li>
    )
}

export default CharacterCard