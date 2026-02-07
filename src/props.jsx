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
function User(props) {
    {/**Or we can also use function User ({MeraName},{age}){} directly.Then we can use MeraName directly to print the came value through props*/}
    console.log(props)
    return (<div>
        <h1>Hello I am from the User Component</h1>
        <h1>From User Component: Hello {props.MeraName}</h1>
        <h1>Age: {props.age}</h1>
        </div>
    )
}


function Main() {

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


    return (
        <div>
            {/* <h1> My Name is {onPageName}</h1>  */}
            <form onSubmit={finalValueSet}>
                <input type="text" onChange={setValue} />
                <input type="submit" />
            </form>
            <User MeraName={onPageName} age={21} /> {/**Here the MeraName is the props  */}

        </div>
    )

}
export default Main;