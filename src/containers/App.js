import React, { Component } from "react";
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";
import Persons from '../components/Persons/Persons';
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Cockpit from "../components/Cockpit/Cockpit";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: "asd1", name: "Prannoy", age: 29 },
        { id: "asd2", name: "Kiran", age: 29 },
        { id: "asd3", name: "Abhishek", age: 28 }
      ],
      otherState: "some other value",
      showPersons: false
    };

    this.nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      };
      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({
        persons: persons
      });
    };

    this.deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({ persons: persons })
    }

    this.togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({ showPersons: !doesShow });
    };
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        < div >
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div >
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div >
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now'))
  }
}

export default App;
