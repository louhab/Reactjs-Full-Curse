import { Component } from "react";

export default class LifeCycleComponent extends Component {
    constructor(props) { 
        super(props);
        this.state = {
          counter : 0
        }
    }
    componentDidMount() {
      console.log('the component was mounted');
    }
    componentDidUpdate() {
      console.log('the component was updated'); 
    }
    componentWillUnmount() {
      console.log('the component will be unmounted');   
    }
    shouldComponentUpdate() {
      console.log('the component will be updated');
    }
    Increment = () => {
      this.setState({ counter: this.state.counter + 1 });
    }
   // eslint-disable-next-line react/require-render-return
  render(){
 return(
    <button onClick={this.Increment}>
     Increment  from mounting app   
    </button>
  )
  }
 
    
}