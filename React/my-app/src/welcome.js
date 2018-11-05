
import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
        setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000)
    }
    render() {
        return (
            <h1>Welcome {this.props.name} times {this.state.counter}</h1>
        );
    }
}
export default Welcome;