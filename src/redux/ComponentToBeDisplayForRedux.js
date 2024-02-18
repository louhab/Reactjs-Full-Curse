import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

function ComponentToBeDisplayForRedux() {
    const count = useSelector(state => state.count);
  const dispatch = useDispatch();
    const INCRMENT = () => {
        dispatch({ type: 'INCRMENT' });
    }
    const DECRIMENT = () => {
        dispatch({ type: 'DECRIMENT' });
    }
    return (
        <>
            <h1 className='mx-auto'>
                Hello from redux component {count}
            </h1>
            <button className='btn btn-outline-primary' onClick={INCRMENT}>
                Increment
            </button>
             <button className='btn btn-outline-info' onClick={DECRIMENT}>
                Decrment
            </button>
        </>
    );
}

export default ComponentToBeDisplayForRedux;