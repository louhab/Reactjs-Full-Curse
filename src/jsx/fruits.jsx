import { useState } from "react";
export default function Fruits() {
    const [fruit, setFruit] = useState();
    const [fruitsList, setFruitsList] = useState([]);
   const displayFruits = () => fruitsList.map(fruit => <li key={fruit}>{fruit}</li>)
    const handlInput = () => {
        const fruitValue = document.getElementById('fruit').value
        setFruit(fruitValue)
    }
    const handlAddFruit = (e) => {
        e.preventDefault();
        {/* opérateur de propagation */ }
        {/* Recat fonctione avec virtuelle dom */}
        setFruitsList([...fruitsList,fruit])
    }
    return (
        <>
        <span>
            <form onSubmit={handlAddFruit}>
                <input onChange={handlInput} type="text" id="fruit" />
                <input type="submit"  value="add new fruit"/>
            </form>
            </span><br></br>
            <ul>
                {displayFruits()}
            </ul>
       </>
    )
}