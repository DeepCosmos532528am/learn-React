//Greeting first 
const Greeting = <h1>Hello from Practice JSX!</h1>

let imgurl = "https://images.unsplash.com/photo-1769406525591-619fd06c678a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8";

//Image
const img = <img className="photo" alt="Beautiful landscape" src={imgurl}></img>

//List
let listitems = ['Home', 'About', 'Services', 'Contact'];
const ulist = <ul> {/* here look <ul> is a JSX element so that is why we wrapped map function inside the curly braces { } */}

   {listitems.map(value => <li>{value}</li>
 )}
    </ul>


//Buttons
const btns = <div><button>ClickMe</button></div>
function PracticeJSX() {
    return <div>
        {Greeting}
        {img}
        {ulist}
        {btns}

    </div>
}

export default PracticeJSX