import React from 'react';
import './Person.css'
const Person = (props) => {
    return (
        <div className="Person">
            <h4 onClick={props.click}>I'm {props.name} and I am {props.age} years old!</h4>
            <p>{props.children}</p>
            <input onChange={props.changed} />
        </div >
    )
}
export default Person