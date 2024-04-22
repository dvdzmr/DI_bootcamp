import './css/exercise3.css'

function Exercise() {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
        <div>
            <h1 className='header1' style={style_header}>a</h1>
            <p className='para'>paragraph</p>
            <a href="https://www.davidzamir.com">This is a link</a>
            <form>
                <label for="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label for="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"/>
            </form>
            <br/>
            <img src="https://picsum.photos/200/300"></img>
            <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
                <li>d</li>
            </ul>
        </div>
    )
}

export default Exercise;