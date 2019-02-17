import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
      "background-color" : '#fff',
      font: 'inherit',  
      border: '1px solid blue',
      padding: '5px',
      cursor: 'pointer'
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
      )
    } 
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button 
          style = {buttonStyle}
          onClick = {this.togglePersons}>Switch Person</button>
        {personGroup}
      </div>
    );
  }
}

export default App;