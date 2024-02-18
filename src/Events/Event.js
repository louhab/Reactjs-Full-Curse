export default function Event() {
    const handleClick = () => {
        alert('the button is clicked');
    }
    const handleChange = (e) => {
        alert(e.target.value);
    }
    const handleSubmit = () => {
         alert('the form was submitted');
    }
    const handleKeyDown = (event) => {
           alert(event.key);
    }
    const handleMouseOver = () => {
//alert('mouse over');
    }
    const handleMouseOut = () => {
       //  alert('the mouse out');
    }
    return (
        <div>
            <button onClick={handleClick}>On click </button><br></br>
            <input type="text" onChange={handleChange} />

            <form onSubmit={handleSubmit}>
                {/* form elements */}
                <button type="submit">Submit</button>
            </form>
            <input type="text" onKeyDown={handleKeyDown} />
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Hover me</div>
        </div>
    )
}