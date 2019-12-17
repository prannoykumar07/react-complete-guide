import React, { Component } from 'react';

class ErrorBoundary extends Component {
constructor(props){
    super(props);
    this.state = {
        hasError: false,
        errorMessage: ''
    }
  }
  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
}
   
    render() {
        if (this.state.hasError) {

        }
        else {
            return this.props.children;
        }
        return <h1> {this.state.errorMessage}</h1>;
    }
}

export default ErrorBoundary;