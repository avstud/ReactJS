import React, { Component } from 'react';
import AppStyle from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {

  state = {
    persons: [
      { id: "101", name: "Ashwini", age: "25" },
      { id: "102", name: "Krishna", age: "21" },
      { id: "103", name: "Kanchan", age: "23" }
    ],

    showPerson: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })

  }

  togglePersons = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }


  render() {
    let personGroup = null;
    if (this.state.showPerson) {
      personGroup = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
    }


    return (
      <div className={AppStyle.App}>
        <Cockpit
          appTitle = {this.props.title}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          toggle={this.togglePersons} />
        {personGroup}
      </div>
    );
  }
}

export default App;