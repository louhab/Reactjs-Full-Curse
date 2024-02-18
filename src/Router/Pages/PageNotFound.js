import React from 'react';

function PageNotFound() {
    const PageNotFoundStyle = {
    border: '2px solid #3498db', /* 2px width solid border with a blue color (#3498db) */
    padding: '20px',/* Add some padding to the content inside the border */
    width: '200px',
    margin : 'auto'
    }
    return (
        <div style={PageNotFoundStyle} >
            not page found
        </div>
    );
}

export default PageNotFound;