import React from "react";
import { Link } from "react-router-dom"

const CharacterDetail = props => {

    console.log(props)
    const characterId = parseInt(props.routerProps.match.params.characterId)
    const character = props.characters.filter(character => character.id === characterId);

    if (character[0]) {
        return (
            < div >
                <img src={character[0].image} alt={character[0].name} />
                <h1>{character[0].name}</h1>
                <h3>Status: {character[0].status}</h3>
                <h3>Species: {character[0].species}</h3>
                <h3>Origin: {character[0].origin.name}</h3>
                <h3>Episodes: {character[0].episode.length}</h3>
                <Link to="/">Volver al listado</Link>

            </div >
        )
    } else {
        return (<p> Cargando</p >)
    };

};






export default CharacterDetail