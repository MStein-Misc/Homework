
import React, { Component } from 'react';
import './student.css';

class Student extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>
                    {this.props.name}:
                    <span className="address">
                        {this.props.address}
                    </span>
                </p>
            </div>
        )
    }
}
export default Student;