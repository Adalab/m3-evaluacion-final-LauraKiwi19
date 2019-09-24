import React from "react"
import "../styles/_filter.scss"


const Filter = (props) => {
    return (
        <div>
            <input className="filter-input" type="text" onChange={props.handleInputFilter}></input>
        </div>
    )
}


export default Filter;