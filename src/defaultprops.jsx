import { useState } from 'react';

// //Here in this we will see how to pass the JSX element through props from one component to other.

// function Component1({passjsxElement = "The JSX is not passed yet!"}){
// return(
//     <div>
//        {passjsxElement}
//     </div>
// )
// }


// function Component2(){
// const jsxElement = <h1>This is the JSX element passed through props</h1>
// return(
// <div>
//     <Component1 passjsxElement={jsxElement} />
// </div>
// )
// }

function User({ name = "New user", age = "unknown" }) { //default prpos provided as the fallback value when the props are not passed from the parent component.
    return (
        <div>
            <h1>Name: {name} and Age: {age}</h1>
        </div>
    )
}

// another way to provide default props is by using the defaultProps property of the component. This allows you to set default values for props that will be used if the parent component does not provide them.

function Userr({ name, age }) {
    return <h1>Name: {name} and Age: {age}</h1>
}

// Userr.defaultProps = {
//     name: "Default Name",
//     age: "Default Age"
// } //This way to provide default not working 

function Main2() {
    return (
        <div>
            <User /> {/**without passing the props */}
            <User name="Rohit" age={21} /> {/**with passing the props */}
            <Userr/> {/**without passing the props */}
        </div>

    )
}

export default Main2;

