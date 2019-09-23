import React from "react";


const CharacterDetail = props => {

    if (props.character === undefined) {
        return <h1>Loading</h1>
    }
    console.log(props.character.name)
    return (
        <div>
            <h1>Nombre: {props.character.name}</h1>
            <h3>Status: {props.character.status}</h3>
            <h3>Species: {props.character.species}</h3>
            <h3>Origin: {props.character.origin.name}</h3>
            <h3>Episodes: {props.character.episode.length}</h3>
        </div>
    )
}

export default CharacterDetail