import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('Persons.js inside constructor', props);
  }
  
  componentWillMount() {
    console.log('Persons.js inside componentWillMount');
  }
  
  componentDidMount() {
    console.log('Persons.js inside componentDidMount');
  }
  
  componentWillReceiveProps(props) {
    console.log('Update Persons.js inside componentWillReceiveProps');
  }
  // 
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Update Persons.js inside shouldComponentUpdate');
  //   return nextProps.persons !== this.props.persons || 
  //     nextProps !== this.props ||
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.changed !== this.props.changed;
  // }
  // 
  componentWillUpdate() {
    console.log('Update Persons.js inside componentWillUpdate');
  }
  
  componentDidUpdate() {
    console.log('Update Persons.js inside componentDidUpdate');
  }
  
  render() {
    console.log('Persons.js inside render');
    return this.props.persons.map((person, index) => (
      <Person
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
        key={person.id}
        name={person.name}
        age={person.age} />
    ));
  }
}

export default Persons;