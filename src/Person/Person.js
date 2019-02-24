import React from 'react';
import PersonStyle from './Person.css';

const person = (props) =>{
    
    return (
        <div className={PersonStyle.Person}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years Old</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} value = {props.name}/>
        </div>
    )
}

export default person;