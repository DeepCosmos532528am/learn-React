//Requirement: Create three buttons which on Click generates three different alerts for three diffrent fruits.


import { useState } from "react";

function Toggle() {
    const [showStatus, setShowStatus] = useState(true);

    function toggleStatus() {
        setShowStatus(!showStatus);
    }
    return (
        <div>
            <button onClick={toggleStatus}>Toggle</button>

            {showStatus ? <h1>Show Status is True</h1> : null}
            {/*showStatus && <h1>Show Status is True</h1>*/}

            {/* This is the same as above line but in a different way. It is called short circuit evaluation. It is used to show and hide the status of the toggle button. */}
        </div>
    )

}



function PracticeState() {
    let [count, setCount] = useState(0);

    let increase = () => {
        setCount(count + 1);
    }

    let decrease = () => {
        setCount(count - 1)
    }

    let setDefault = () => {
        setCount(0)
    }

    return (<div style={{ border: '2px solid black', padding: '10px', margin: '10px', height: '200px' }}>
        <button onMouseOver={increase}>IncreaseCounts</button>
        <button onMouseOver={decrease}>ReverseCounter</button>
        <button onClick={setDefault}>Set to default</button>
        <h1>Count heading to {"->"} {count}  </h1>

        <Toggle />
        {/* // This is the toggle component which is used to show and hide the status of the toggle button. */}

    </div>)
}





export default PracticeState;