import React, { PureComponent } from 'react'
import uuid from 'uuid4'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('App.js inside constructor', props);
    this.state = {
      persons: [
        {id: uuid(), name: "Max", age: 28},
        {id: uuid(), name: "Manu", age: 29},
        {id: uuid(), name: "Stephanie", age: 26},
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false,
    };
  }
  
  componentWillMount() {
    console.log('App.js inside componentWillMount');
  }
  
  componentDidMount() {
    console.log('App.js inside componentDidMount');
  }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Update App.js inside shouldComponentUpdate');
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }
  
  componentWillUpdate() {
    console.log('Update App.js inside componentWillUpdate');
  }
  
  getSnapshotBeforeUpdate() {
    console.log('Update App.js inside getSnapshotBeforeUpdate');
    return null;
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Update App.js inside getDerivedStateFromProps', nextProps, prevState);
    return null;
  }
  
  componentDidUpdate() {
    console.log('Update App.js inside componentDidUpdate');
  }
  
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
    this.setState((prevState, props) => {
      return {
        showPersons: !prevState.showPersons,
        toggleClicked: prevState.toggleClicked + 1
      };  
    });
  }
  
  deletePersonHandler = (i) => {
    const persons = [...this.state.persons];
    persons.splice(i, 1);
    this.setState({persons});
  }
  
  loginHandler = () => {
    this.setState({authenticated: true});
  }
  
  render() {
    console.log('App.js inside render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          changed={this.nameChangedHandler}
          clicked={this.deletePersonHandler}
          persons={this.state.persons}/>
      )
    }
    
    return (
      <div className={classes.App}>
        <button onClick={() => this.setState({showPersons: true})}>Show Persons</button>
        <Cockpit
          login={this.loginHandler}
          appTitle={this.props.title}
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}/>
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
