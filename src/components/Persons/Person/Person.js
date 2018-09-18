import React, { Component } from "react"
import classes from './Person.css'
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'proptypes';
import { AuthContext } from '../../../containers/App.js';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('Person.js inside constructor', props);
  }
  
  componentWillMount() {
    console.log('Person.js inside componentWillMount');
  }
  
  componentDidMount() {
    console.log('Person.js inside componentDidMount');
    this.inputElement.focus();
  }
  
  componentWillUnmount() {
    console.log('Removing component!', this.props.name);
  }
  
  render() {
    console.log('Person.js inside render');
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated!</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input 
          ref={(inp) => {this.inputElement = inp}}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);