import React from "react"
import CharacterCard from "./CharacterCard";
import { Link } from 'react-router-dom';



const CharacterList = (props) => {
    // console.log(props.characters[0].name)
    return (
        <ul>
            {props.characters
                .filter(character => character.name.toUpperCase().includes(props.inputValue.toUpperCase()))
                .map(character => {
                    return (

                        <CharacterCard character={character} key={character.id} />
                    )
                })}
        </ul>
    )
}

export default CharacterList;