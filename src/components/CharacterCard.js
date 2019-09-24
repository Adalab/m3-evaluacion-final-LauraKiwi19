import React from "react";
import { Link } from "react-router-dom"
import "../styles/_charactercard.scss"

const CharacterCard = (props) => {
    return (
        <li className="character__list">
            <div className="character__container">
                <Link className="character__link" to={`/character/${props.character.id}`}>

                    <img className="character__img" src={props.character.image} alt={props.character.name} />   </Link>
                <div className="character__text">
                    <h2 className="character__h2">{props.character.name}</h2>
                    <p className="character__p">{props.character.species}</p>
                </div>


            </div>
        </li >
    )
}

export default CharacterCard