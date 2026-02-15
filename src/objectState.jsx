import { useState } from "react";

function ObjectState() {
    const [obj, setObj] = useState({
        name: 'Sachin',
        address: {
            city: 'Gwalior',
            country: 'India'
        }
    })
    // const [name, setName] = useState("");

    function handleName() { //function to update obj + nested obj
        setObj({ ...obj, name: "Namanji", address: {...obj.address, city:"Bhopal" }}) 
}

return <div>
    {/* <input type="text" value={name} onChange={(e) => {
            const currVal = e.target.value;
            setName(currVal)
        }} /> */}
    <h1>Name is: {obj?.name}</h1>
    <p>Add: {obj?.address?.city}, {obj?.address?.country}</p>
    <button onClick={handleName}>Click</button>
    {/**setObj({...obj, name})Agar aapke variable ka naam aur object ki key ka naam bilkul SAME hai, toh aapko unhe do baar likhne ki zaroorat nahi hai.
Old Way (Lamba tarika): setObj({ ...obj, name: name })
New Way (Shorthand): setObj({ ...obj, name }) */}
</div>
}
//as we can see I have used the optional chaining .? here to ensure that no problem would come in production when any value at specific key is not present there.

export default ObjectState;

/**🚀 Interview Notes: Updating Objects in React State
1. The Core Concept: Immutability
React mein hum state object ko "Read-Only" maante hain. Agar humein object ki kisi ek property ko bhi badalna hai, toh humein pura ka pura object replace karna padta hai. Isse "Immutable Update" kehte hain.

2. Why "Spread Operator" is Mandatory in State?
Jab hum state mein object rakhte hain (jaise user object jisme name, email, aur id hai), toh humein do challenges aate hain:

Don't Lose Data: Agar hum direct setUser({ name: "Sachin" }) likhenge, toh email aur id delete ho jayenge. Spread operator (...user) purane data ko "retain" (surakshit) rakhta hai.

Trigger Re-render: React tabhi screen refresh karta hai jab use memory mein Naya Address milta hai. Spread operator ek naya object create karke naya address generate karta hai.

3. Step-by-Step Logic (Interview Explanation)
Interview mein update process ko aise explain karo:

Copy: Pehle ... use karke purane state ki copy banao.

Override: Jo property badalni hai, use copy ke baad likh kar overwrite karo.

Replace: setState function ke zariye purane object ko is naye object se replace kar do.

4. Handling Nested Objects (The Catch)
Ek important interview point: Spread operator sirf "Shallow Copy" karta hai (matlab sirf upar ki layer copy karta hai).

Agar object ke andar ek aur object hai (Nested), toh humein us inner object ko bhi spread karna padega.

Agar hum aisa nahi karenge, toh inner object ka reference purana hi rahega aur React ko change detect karne mein problem ho sakti hai.

5. Common Interview Questions (Hinglish)
Q: Kya hum Object.assign() use kar sakte hain?
A: "Haan sir, kar sakte hain, lekin Spread Operator zyada readable aur modern hai. Ye kam lines mein wahi kaam karta hai jo Object.assign karta hai."

Q: Functional Update (prev => ...) kab use karna chahiye?
A: "Jab hamari nayi state Purani State (Previous State) par depend karti ho. Ye race-conditions se bachata hai aur ensure karta hai ki hum hamesha latest data par kaam kar rahe hain."

6. Summary for Quick Revision
Direct Change: ❌ state.name = "X" (UI update nahi hogi).

Direct Replace: ❌ setState({ name: "X" }) (Baaki data ud jayega).

Spread Update: ✅ setState({ ...state, name: "X" }) (Perfect way). */