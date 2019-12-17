import React, { Component } from "react";
import classes from "./App.css";
import Person from "./components/Persons/Person/Person";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";


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

    this.deleteHandler = (personIndex) => {
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
    let btnClass = [classes.App];

    if (this.state.showPersons) {
      persons = (
        < div >
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person click={() => this.deleteHandler(index)}
              name={person.name} age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} /></ErrorBoundary>
          })}
        </div >
      );
      //btnClass.push(classes.Red);
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red','bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React app</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        {
          <button className={btnClass} onClick={this.togglePersonsHandler}>
            Toggle Persons
        </button>
        }
        {persons}
      </div >
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now'))
  }
}

export default App;
