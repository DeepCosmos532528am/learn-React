//Requirement: Create three buttons which on Click generates three different alerts for three diffrent fruits.

function PracticeEvents() {
    function handleClick(fruitName) {
        alert(`you have clicked for ${fruitName}`)
    }

    return <div style={{
        border: "2px solid black", padding: "10px", margin: "10px", backgroundColor: "#f0f0f0", borderRadius: "5px"
        , boxShadow: "2px 2px 12px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", alignItems: "center"
    }}>
        <h1>Hello from PracticeEvents component</h1>
        <button onClick={() => handleClick("Grapes")}>Grapes</button>
        <button onClick={() => handleClick("Banana")}>Banana</button>
        <button onClick={() => handleClick("Orange")}>Orange</button>
    </div>
}

export default PracticeEvents