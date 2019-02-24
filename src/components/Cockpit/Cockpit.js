import React, { Component } from 'react';
import cockpitStyle from './Cockpit.css';

class Cockpit extends Component {
    constructor() {
        super();
        console.log("[Cockpit.js] Inside Constructor ");
    }

    componentWillMount() {
        console.log("[Cockpit.js] Inside Component will Mount ");
    }

    componentDidMount() {
        console.log("[Cockpit.js] Inside Component Did Mount ");
    }

    render() {
        console.log("[Cockpit.js] Inside Render Method");

        const classes = [];
        let btnStyle = '';

        if (this.props.showPerson) {
            btnStyle = cockpitStyle.red;
        }

        if (this.props.persons.length <= 2) {
            classes.push(cockpitStyle.red);
        }

        if (this.props.persons.length <= 1) {
            classes.push(cockpitStyle.bold);
        }

        return (
            <div className={cockpitStyle.Cockpit}>
                <h1>{this.props.appTitle}</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button
                    className={btnStyle}
                    onClick={this.props.toggle}>Switch Person</button>
            </div>
        );
    }

}

export default Cockpit;