import React from "react"


const Filter = (props) => {
    return (
        <div>
            <input type="text" onChange={props.handleInputFilter}></input>
        </div>
    )
}


export default Filter;