import React, { Component } from 'react';
import AppStyle from './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
    persons: [
      { id: "101", name: "Ashwini", age: "25" },
      { id: "102", name: "Krishna", age: "21" },
      { id: "103", name: "Kanchan", age: "23" }
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
    let personGroup = null;
    let btnStyle = null;
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

      btnStyle = AppStyle.red;
    } 
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push( AppStyle.red );
    }

    if(this.state.persons.length <= 1){
      classes.push( AppStyle.bold );
    }
    
    return (
      <div className={AppStyle.App}>
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          className = {btnStyle}
          onClick = {this.togglePersons}>Switch Person</button>
        {personGroup}
      </div>
    );
  }
}

export default App;