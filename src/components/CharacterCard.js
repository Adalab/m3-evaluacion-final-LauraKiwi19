import React from "react";


const CharacterCard = (props) => {
    return (
        <li>
            <img src={props.character.image} alt={props.character.name} />
            <h3>Nombre: {props.character.name}</h3>
            <h4>Especie: {props.character.species}</h4>
        </li>
    )
}

export default CharacterCard