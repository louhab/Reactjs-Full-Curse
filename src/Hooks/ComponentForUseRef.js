import { useRef } from 'react';

export default function ComponentForUseRef() {
    // We can use for getting values from inputs
    // and getting dom values 
    const inputNameRef = useRef();  // Declare inputNameRef
    const inputDateRef = useRef();
    function handleInputChange() {
        console.log('name===>' , inputNameRef.current.value);
        console.log('date===>' , inputDateRef.current.value);
    }
    return (
        <form>
            <div className='form-group'>
                <label>Name : </label>
                <input type="text" className="form-control" ref={inputNameRef} onChange={handleInputChange} />
            </div>
            <div className='form-group'>
                <label>Date : </label>
                <input type="date" className="form-control" ref={inputDateRef} onChange={handleInputChange} />
            </div>
        </form>
    );
}
