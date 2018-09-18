import React from 'react';
import Aux from '../../hoc/Aux'
import classes from './Cockpit.css';

const cockpit = (props) => {
  
  let btnClass = [classes.Button];
  if (props.showPersons) {
    btnClass.push(classes.Red);
  }
  
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  
  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button 
        className={btnClass.join(' ')}
        onClick={props.clicked}>Toggle Persons!</button>
      <button
        onClick={props.login}>Login</button>
    </Aux>
  );
}

export default cockpit;