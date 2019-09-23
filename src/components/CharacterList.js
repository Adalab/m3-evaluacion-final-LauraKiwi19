import React from "react"
import CharacterCard from "./CharacterCard"


const CharacterList = (props) => {
    console.log(props)
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