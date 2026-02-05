function Eventss({ nodetype }) {
    return <button onClick={nodetype}>generate alert</button>
}

function alertonclick(whatalert) {
    alert(whatalert)
}
function EventsReact() {


    return (
        <div>
            <h1>Hello from the event.jsx file</h1>
            <Eventss nodetype={() => alertonclick("btn")} />
        </div>)
}

//lets see another way for the same thing

export function HandleClickkk({ message = "You have not given me any message to show in alert " }) {
    function handleclick(msg) {
        alert(message + msg)//its not the JSX stuff, its normal JS function. Note this.
    }
    return <button onClick={() => handleclick(message)} >Hello Button</button>
}


export default EventsReact