import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert('Saved data to Cloud!');
        // }, 1000)
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] clean up work in useEfect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] clean up work in 2nd useEfect');
        }
    });

    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red','bold']
    }

    return (<div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button className={btnClass}
            ref={toggleBtnRef}
            onClick={props.clicked}>
            Toggle Persons
        </button>
        <button onClick={authContext.login}>Log In</button>
    </div>
    );
}

export default React.memo(cockpit);

/*
<AuthContext.Consumer>
    {context => <button onClick={context.login}>Log In</button>}
</AuthContext.Consumer>
*/