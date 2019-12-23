import React, { Component } from "react";
import classes from "./App.css";
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] contructor')
    this.state = {
      persons: [
        { id: "asd1", name: "Prannoy", age: 29 },
        { id: "asd2", name: "Kiran", age: 29 },
        { id: "asd3", name: "Abhishek", age: 28 }
      ],
      otherState: "some other value",
      showPersons: false,
      showCockpit: true
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

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerviedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  render() {
    console.log('[App.js] render');
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
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler} />
        ) : null
        }
        {persons}
      </div >);
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now'))
  }
}

export default App;
