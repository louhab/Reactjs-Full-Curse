import { useEffect, useState } from "react";
export default function ComponetForUseEffect() {
    const [count, setCount] = useState(0);
    {/* Like componentWillUnmount  */}
    useEffect(() => {
        console.log('after rendering of the component')
    });
    {/* Like componentDidMount  */}
    useEffect(() => {
        console.log('the component was mounted')
    }, []);
    {/* Like shouldComponentUpdate  */}
    useEffect(() => {
        console.log('the component was updated')
     }, [count]);
    const SetCountNewValue = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={SetCountNewValue}>
                Press to update 
            </button>
        </div>
    )
}