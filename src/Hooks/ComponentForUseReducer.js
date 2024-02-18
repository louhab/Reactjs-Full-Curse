import { useReducer ,React } from 'react';
function ComponentForUseReducer() {
    const initialState = {
        count : 1
    }
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'up': return {count: state.count + 1}
            case 'down': return { count: state.count - 1 }
            default: return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
                        {state.count} 
            <button onClick={()=>dispatch({type:'up'})}>Up</button>
            <button onClick={()=>dispatch({type:'down'})}>Down</button>
            <button onClick={()=>dispatch({type:'reset'})}>RESET</button>
        </>
    );
}

export default ComponentForUseReducer;