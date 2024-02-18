import React, { Component } from 'react';

export default class FirstComponentWithChildreanUsingClass extends Component {
    render() {
        return (
        <div>
            {this.props.children}
        </div>
        );
    }
}
