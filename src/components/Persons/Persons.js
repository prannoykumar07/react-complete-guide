import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persnons.js] componentWillReceiveProps', props);
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persnons.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons) {
            return true;
        }
        else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: "Snapshot !!!" };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log('[Persons.js] componentDidUpdate snapshot', snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnMount');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person click={() => this.props.clicked(index)}
                name={person.name} age={person.age}
                changed={(event) => this.props.changed(event, person.id)} key={person.id} />
        })
    }
}

/*
const persons = (props) => {
    console.log('[Persons.js] rendering...');
    return props.persons.map((person, index) => {
        return <Person click={() => props.clicked(index)}
            name={person.name} age={person.age}
            changed={(event) => props.changed(event, person.id)} key={person.id} />
    })
};
*/

export default Persons;