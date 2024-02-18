import React, { Component } from 'react';

export default class FirstComponentWithPropsUsingClass extends Component {
    render() {
        return (
            <ul>
                <li>Hello {this.props.fullName}</li>
                <li>Your email is {this.props.email}</li>
                <li>Your Role is  {this.props.role}</li>
            </ul>
        );
    }
}
