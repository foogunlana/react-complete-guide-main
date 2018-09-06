import React, { Component } from 'react'
import uuid from 'uuid4'
import classes from './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: uuid(), name: "Max", age: 28},
      {id: uuid(), name: "Manu", age: 29},
      {id: uuid(), name: "Stephanie", age: 26},
    ],
    showPersons: false
  };
  
  nameChangedHandler = (event, personId) => {
    const index = this.state.persons.findIndex(p => p.id === personId);
    const person = {
      ...this.state.persons[index]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({persons});
  }
  
  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }
  
  deletePersonHandler = (i) => {
    const persons = [...this.state.persons];
    persons.splice(i, 1);
    this.setState({persons});
  }
  
  render() {
    let persons = null;
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => 
            <Person
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, p.id)}
              key={p.id}
              name={p.name}
              age={p.age} />
          )}
        </div>
      );
      btnClass = classes.Red;
    }
    
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>Hi I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons!</button>
          {persons}
      </div>
    );
  }
}

export default App;
