/** 
Props (short for "properties") React mein ek important concept hai. Ye wo mechanism hai jo ek component se dusre component ko data pass karne ke liye use hota hai.
Props kaam kaise karte hain:
Parent Component se Data Pass Karna: Jab ek component ko dusre component ko kuch data dena hota hai, toh wo data props ke through pass kiya jaata hai.
Immutable: Props ko child component ke andar modify nahi kiya jaa sakta. Agar child component ko data chahiye, toh wo sirf data ko read kar sakta hai, modify nahi kar sakta.
Data Flow: React mein data ek direction mein flow karta hai — Parent to Child. Matlab, parent component apne child component ko props ke zariye data bhej sakta hai. 
*/

/**Props ek powerful feature hai React ka, jo component-based architecture mein data sharing ko bahut flexible aur efficient banata hai. Isse parent-child relationship mein data pass karna bahut asaan ho jata hai. */


import { useState } from "react";

//Here this is the user Component, now we are required to display the name of the user in the user component itself.So we will use the 'props' mechanism here. 
function User1(props) {
    {/**Or we can also use function User ({MeraName},{age}){} directly.Then we can use MeraName directly to print the came value through props*/ }
    console.log(props)
    return (<div>
        <h1>Hello I am from the User Component</h1>
        <h1>From User Component: Hello {props.MeraName}</h1>
        <h1>Age: {props.age}</h1>
    </div>
    )
}

// Object passed------------------------------------------

function User2(props){ //this method is called standard method to pass the object through props and then we can access the value of the object through props.passobj.name   
    return(<h1>{props.passobj.name}</h1>)
}
// OR

function User22({passobj = age}){//Is point pe hi automatically through destructuring mechanism, props. ho jata h. This method is called destructuring method to pass the object through props and then we can access the value of the object directly through passobj.name.

    return(<h1>Hello: {passobj.name} and age is {age}</h1>)
}

//Destructuring is the preffered way to pass the object through props because it is more concise and easier to work with. It allows you to directly access the properties of the object without having to reference the props object each time.

//here in the terms of the object passing know these,
//  How {} Equals props:
// When you write { passobj, age } in the parameter, React automatically pulls these properties from the props object and makes them directly available in the component.

// This is equivalent to accessing them through props.passobj or props.age but is more concise and easier to work with. 

//Array Passing through props-----------------------------
function User3({arr, secValue}){ //Here we are passing the array through props and then we can access the value of the array through arr[0] or secValue.
    return(
        <h1>This is the Array: First value {arr[0]}, Second value {secValue}</h1>
    )
}

function Main() {

    //For Input Value to show in JSX element on clicking submit button.
    const [name, setname] = useState("")
    const [onPageName, setNameOnPage] = useState("")

    function setValue(e) {
        console.log(e.target.value)
        setname(e.target.value)
    }
    const finalValueSet = (e) => {
        e.preventDefault()
        setNameOnPage(name)
    }

    //Object to pass to the User2 and User22 component

    const obj = {
        name: "Rohit",
        age: 21,
        city: "Gwl"
    }

    //Array to pass to the User3 component

    const arr = ["Rohit", "Amit", "Rahul", "Suresh"]

    return (
        <div>
            {/* <h1> My Name is {onPageName}</h1>  */}
            <form onSubmit={finalValueSet}>
                <input type="text" onChange={setValue} />
                <input type="submit" />
            </form>
            {/**Here the MeraName is the variable props passed to User Component*/}
            <User1 MeraName={onPageName} age={21} /> 

            {/**Here object is passed*/}
            <User2 passobj = {obj}/>
            <User22 passobj = {obj} age={obj.age}/>

            {/**Here array is passed*/}
            <User3 arr = {arr} secValue={arr[1]}/>

        </div>
    )

}
export default Main;