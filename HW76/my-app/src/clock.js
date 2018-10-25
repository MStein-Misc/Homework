

import React, { Component } from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
        setInterval(() => this.setState({time: new Date().toLocaleTimeString()}), 1000);
    }
    render() {
        return (
            <h2>{this.state.time}</h2>
        )
    }
}
export default Clock;