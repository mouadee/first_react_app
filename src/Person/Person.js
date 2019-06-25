import React from 'react';
import './../App.css'
function Person(props) {
    return <h4>I'm a {props.name} and i have {props.age} Yo</h4>;
}
export default Person