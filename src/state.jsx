import { useState } from "react"; // Here we have imported the useState hook🪝 to implement the state in this file state.jsx 

// Ok at first, look at the below code. What do you think, should the click event of the button change the name as followed below in <h1>!!
function ChangeTheName() {
    let name = 'Sachin Sharma'

    function changeName() {
        name = 'Sachin Sharma 2.0'
    }

    return (
        <div>
            <h1>Hello From React State {name}</h1>
            <button onClick={changeName}>ChangeName</button>
        </div>
    )
} //It will not ha ha ha!! :D. Here is, from where the concept of State in React pops up...

/*Note this!! 
State = component ka apna data
Ye data change ho sakta hai
State change hoti hai → UI automatically update hoti hai
State ko direct change nahi karte
State sirf React ke method se update hoti hai
Har component ki apni alag state hoti hai
State zyada tar user interaction (click, input, API data) se change hoti hai
Bas itna yaad rakho:
👉 State badli = screen badli 😄
*/

//Ab dekho, state ko power karte h hooks and more presicely useState hook!!

/*Again Note this!! 
Hooks = functions jo React features use karne dete hain
Hooks sirf functional components me kaam karte hain
Inse state aur lifecycle handle hota hai
Class component ki zarurat khatam ho jaati hai
Hooks ka naam hamesha “use” se start hota hai
Hooks ko top level pe use karte hain (loop/if ke andar nahi)
Hooks se code clean, reusable aur readable hota hai
*/



function StateExample() {
    const [fruit, setFruit] = useState('Grapes')
    let [count, setCount] = useState(0);

    let fruits = ['Papaya', 'Apple', 'Mango', 'Orange', 'Strawberry'];

    function setState() {
        setFruit(fruits[count]);
        // Ye hamesha 0 se 4 ke beech ghumta rahega
        setCount((count + 1) % fruits.length);// count + 1 karne ke baad, usko fruits.length se divide karenge, jisse count 0 se 4 ke beech ghumta rahega
        console.log(count);
    }

    return (<div>
        <h1>The current fruit name is: {fruit}</h1>
        <button onClick={() => setState()}>change fruit</button>
    </div>)
}


function ReactState() {

    return <div>
        <ChangeTheName />
        <StateExample />
    </div>
}

export default ReactState;