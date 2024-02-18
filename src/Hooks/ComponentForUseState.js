import { useState } from 'react';
export default function ComponentForUseState() {
    const [count, setCount] = useState(0);
    const InCrement = () => {
        setCount(count + 1)
    }
    const DeCrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
              the value of the counter is   {count}<br></br><br></br>
            <button
            onClick={InCrement}
            >
                Increment
            </button><br></br>
            <br></br>
            <button
            onClick={DeCrement}
            >
                Decrement
            </button>
        </div>
    )
}