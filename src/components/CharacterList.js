import React from "react"
import CharacterCard from "./CharacterCard";
import "../styles/_characterlist.scss"



const CharacterList = (props) => {
    if (props.characters === undefined) {
        return (<h1>Cargando...</h1>)

    }

    /*     filterEpisodes(character){
            if (props.episodeValue === "más de 1") {
                return (
                    character.episode.length >= 1
                )
            } else if (props.episodeValue === "más de 3") {
                return (
                    character.episode.length >= 3
                )
            } else if (props.episodeValue === "más de 10") {
                return (character.episode.length >= 10)
            } else {
                return (character.episode.length >= 1)
            } */


    return (

        <ul className="list__container">
            {props.characters
                /*  .filter(filterEpisodes()) */
                /*  .filter(character => character.episode.length >= parseInt(props.episodesValue)) */
                .filter(character => character.status.includes(props.statusValue))
                .filter(character => character.gender.includes(props.genderValue))
                .filter(character => character.location.name.includes(props.locationValue))
                .filter(character => character.name.toUpperCase().includes(props.inputValue.toUpperCase()))
                .map(character => {
                    console.log(character.episode.length)
                    return (
                        <CharacterCard character={character} key={character.id} />
                    )
                })}
        </ul>
    )
}

export default CharacterList;