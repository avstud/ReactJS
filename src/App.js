import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Ashwini", age: "25" },
      { name: "Krishna", age: "21" }
    ],

    showPerson :false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "25" },
        { name: "Krishna Verma", age: "21" }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Ashwini", age: "25" },
        { name: event.target.value, age: "21" }
      ]
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
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={() => this.switchNameHandler('Ash')}
              changed={this.nameChangedHandler}>
              My Hobbies : Football
            </Person>
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