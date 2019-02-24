import React from 'react';
import cockpitStyle from './Cockpit.css';

const cockpit = (props) => {

    const classes = [];
    let btnStyle = '';

    if (props.showPerson) {
        btnStyle = cockpitStyle.red;
    }

    if (props.persons.length <= 2) {
        classes.push(cockpitStyle.red);
    }

    if (props.persons.length <= 1) {
        classes.push(cockpitStyle.bold);
    }

    return (
        <div className={cockpitStyle.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={btnStyle}
                onClick={props.toggle}>Switch Person</button>
        </div>
    );
}

export default cockpit;