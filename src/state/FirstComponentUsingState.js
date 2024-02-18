import { Component } from 'react';
export default class FirstComponentUsingState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            date: undefined
        }
    }
    handleButtonClick = (param) => {
    this.setState({ counter: param });
  };
    render() {
        return (
        <div>
            <p>Counter: {this.state.counter}</p>
            <button onClick={() => this.handleButtonClick(0)}>Set Counter to 0</button>
            <button onClick={() => this.handleButtonClick(5)}>Set Counter to 5</button>
            <button onClick={() => this.handleButtonClick(10)}>Set Counter to 10</button>
        </div>
        )
    }
}