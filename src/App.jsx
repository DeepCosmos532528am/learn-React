import React from "react";
import Child1 from "./child1";
import Child2 from "./child2";
import { useState } from "react"

function App() { //Here App being our parent component

  const [userName, sharedUserName] = useState("")

  return (
    <div>
      {/* Sibling 1: Iske paas update karne ki power hai */}
      <Child1 updateUserName={sharedUserName} currUserName={userName} />
      {/* Sibling 2: Iske paas sirf display karne ki power hai */}
      <Child2 currUserName={userName} />
    </div>
  )
}
export default App;

//🚀 React Interview Notes: Lifting State Up
// 1. What is "Lifting State Up"?
// Jab do ya do se zyada components ko same data share karna ho, toh hum us data (state) ko unke Common Parent mein move kar dete hain. Is process ko "Lifting State Up" kehte hain.

// 2. Why do we need it? (The "Siblings Can't Talk" Rule)
// Unidirectional Data Flow: React mein data hamesha Top to Bottom (Parent se Child) jata hai.

// No Horizontal Connection: Do siblings (bhai-behen) aapas mein directly baat nahi kar sakte. Ek sibling doosre sibling ko "call" karke data nahi bhej sakta.

// Single Source of Truth: Agar data Parent ke paas hoga, toh wahi data dono children ko milega aur UI hamesha "in-sync" rahegi.

// 3. Solving the "Doubt" (Nested vs. Sibling)
// Doubt: "Kya hum Child1 ke return mein Child2 ko call karke data nahi bhej sakte?"

// Answer for Interviewer:
// "Haan, kar sakte hain, lekin tab wo Siblings nahi rahenge. Wo Parent-Child ban jayenge. Agar UI design ke hisaab se unhe side-by-side (Siblings) rehna zaroori hai, toh hum unhe nest (ek ke andar ek) nahi kar sakte. Tab humein state ko upar 'Lift' hi karna padega."

// 4. How to implement it? (Step-by-Step)
// State Identification: Pehle state ko child components se hatao.

// Lift to Parent: State ko common Parent mein useState() se declare karo.

// Pass Down as Props: Parent se state ko as a prop dono children ko bhejo.

// Callback Function: Parent ek function bhi bhejta hai (handler), jise call karke Child state update kar sake.

// 💡 Pro-Tip for Full Stack Developers
// Interviews mein jab aap se ye poochein, toh context add karo:

// "Sir, jaise Java mein hum Encapsulation follow karte hain, waise hi React mein state lifting se hum data flow ko control karte hain. Agar app bahut bada ho jaye, toh hum Context API ya Redux use karte hain taaki 'Prop Drilling' se bach sakein."