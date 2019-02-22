import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';
class App extends Component {

  state = {
    persons: [
      { id: "101", name: "Ashwini", age: "25" },
      { id: "102", name: "Krishna", age: "21" }
    ],

    showPerson :false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons}) 
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = { ...this.state.persons[personIndex]}
    person.name = event.target.value;

    const persons = [ ...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons : persons
    })

  }

  togglePersons = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow});
  }


  render() {

    const buttonStyle = {
      backgroundColor : 'green',
      font: 'inherit',  
      border: '1px solid darkgreen',
      padding: '5px',
      cursor: 'pointer',
      color: 'white',
      ':hover':{
        backgroundColor : 'lightgreen',
        color : 'black'
      }
    }

    let personGroup = null;

    if(this.state.showPerson){
      personGroup = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
                      key = {person.id}
                      name = {person.name}
                      age = {person.age}
                      click = {() => this.deletePersonHandler(index)}
                      changed = {(event) => this.nameChangedHandler(event, person.id)}
                    />
            })
          }  
          </div>
      );

      buttonStyle.backgroundColor = 'red';
      buttonStyle[':hover'] = {
        backgroundColor : 'salmon',
        color : 'black'
      }
    } 
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          style = {buttonStyle}
          onClick = {this.togglePersons}>Switch Person</button>
        {personGroup}
      </div>
    );
  }
}

export default Radium(App);