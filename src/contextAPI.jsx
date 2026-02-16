import { useContext, createContext, useState } from "react";

// 1. Context Create kiya
const SubjectContext = createContext();

function ContextAPI() {
  const [subject, setSubject] = useState("JavaDevelopment");

  return (
    <div style={{ backgroundColor: "red", padding: "10px" }}>
      {console.log("ContextAPI Component (Parent) called")}
      
      {/* Input box jisse hum state update karenge */}
      <input 
        type="text" 
        value={subject} 
        onChange={(e) => setSubject(e.target.value)} 
        placeholder="Type subject name..."
      />

      {/* 2. Provider ka use karke value pass ki */}
      <SubjectContext.Provider value={subject}>
        <School />
      </SubjectContext.Provider>
    </div>
  );
}

function School() {
  return (
    <div style={{ backgroundColor: "yellow", padding: "10px" }}>
      <h1>School Component</h1>
      {console.log("School Component called")}
      <Class />
    </div>
  );
}

function Class() {
  return (
    <div style={{ backgroundColor: "green", padding: "10px" }}>
      <h1>Class Component</h1>
      {console.log("Class Component called")}
      <Students />
    </div>
  );
}

function Students() {
  return (
    <div style={{ backgroundColor: "blue", padding: "10px" }}>
      <h1>Students Component</h1>
      {console.log("Students Component called")}
      <Subjects />
    </div>
  );
}

function Subjects() {
  // 3. Last child mein useContext se value consume ki
  const subject = useContext(SubjectContext);
  
  return (
    <div style={{ backgroundColor: "orange", padding: "10px" }}>
      {console.log("Subject Component (Last Child) called")}
      <h1>Subjects: {subject}</h1>
    </div>
  );
}

//The below is the issue when passing the value through prop drilling , to avoid this unwanted middle components, we use ContextAPI. limitation is it donot stop unwanted re-rendering of middle one, for them still we have to use react.memo or something

// function ContextAPI(){
//  const [subject , setSubject] = useState("JavaDevelopment")
 
// return <div style={{backgroundColor:"red",padding :"10px"}}>

//   <h1>ContextAPI Component</h1>
//      <input type="text" value={subject} onChange={(e)=> setSubject(e.target.value)}/>
//   {console.log("ContextAPI Component called")}
//   <School subject ={subject}/>
// </div>
// }

// function School({subject}){
//  return <div style={{backgroundColor:"yellow",padding :"10px"}}><h1>School Component</h1>
//    {console.log("School Component called by ContextAPI Comp.")}

//  <Class subject ={subject}/>
//  </div> 
// }

// function Class({subject}){
//  return <div style={{backgroundColor:"green",padding :"10px"}}><h1>Class Component</h1>
//  <Students subject ={subject}/>
//     {console.log("Class Component called by School Comp.")}

//  </div> 
// }

// function Students({subject}){
//  return <div style={{backgroundColor:"blue",padding :"10px"}}><h1>Students Component</h1>
//     {console.log("Students Component called by Class Comp.")}

//  <Subjects subject ={subject}/>
//  </div> 
// }

// function Subjects({subject}){
//  return <div style={{backgroundColor:"orange",padding :"10px"}}><h1>Subjects {subject} </h1>
//     {console.log("Subject Component called by Students Comp.")}
// </div> 
// }





export default ContextAPI;

 /**
  * issue in prop driling : 
  * 
  * 1. Code Maintainability (Sabse Badi Problem)
Jab aap 5-6 layers deep props pass karte ho, toh beech wale components (Middleman) ko un props ki koi zaroorat nahi hoti, phir bhi unhe woh data "carry" karna padta hai.

Issue: Agar aapko Grandparent mein variable ka naam change karna hai (e.g., user se userData), toh aapko beech ke saare 5 components mein jaakar manually naam change karna padega.

Risk: Ek bhi jagah spelling mistake hui toh poora app crash ho jayega aur error dhoondna mushkil hoga.

2. Component Reusability Khatam Ho Jati Hai
Prop drilling components ko "Tight-Coupled" bana deti hai.

Maan lo aapka ek Button component hai jo 4th layer par hai.

Agar us Button ko data grandparent se mil raha hai, toh aap us Button ko kisi aur page par use nahi kar sakte kyunki wahan usey woh specific "props chain" nahi milegi.

Component "independent" nahi rehta, woh apne parent par poori tarah depend ho jata hai.

3. Unnecessary Re-renders (Performance Issue)
React ka rule hai: "Jab props change hote hain, toh component re-render hota hai."

Agar Grandparent ka data update hua, toh beech wale components (jo us data ko use bhi nahi kar rahe) woh bhi zabardasti re-render honge.

Chote apps mein ye pata nahi chalta, lekin bade apps mein isse UI laggy (slow) ho jata hai.

4. Boilerplate Code (Ganda Dikhta Hai)
Aapka code bahut "Cluttered" ho jata hai.

Component ke function definition mein 10-10 props dikhne lagte hain.

Naya developer jab code dekhega toh usey samajh nahi aayega ki ye authData is component mein use ho raha hai ya sirf niche pass karne ke liye rakha gaya hai.

Real-World Example (Hinglish):
Socho ek delivery boy (Prop) ko 10th floor par parcel dena hai. Lift kharab hai.

Prop Drilling: Woh har floor ke rehne wale ko parcel pakdata hai aur bolta hai "uupar pass karo". Beech wale log (Middle components) pareshan ho rahe hain bina wajah.

Context API: Ek direct "Dumbwaiter" (choti lift) hai jo seedha 1st floor se 10th floor par parcel pahuncha deti hai. Beech wale logon ko disturb nahi kiya jata.

## 🟢 1. Context API Kya Hai? (Definition)

Context API React ka ek built-in feature hai (React 16.3+ mein introduce hua tha) jo humein data ko poore Component Tree mein **"globally"** share karne ki permission deta hai bina **"Prop Drilling"** kiye.

Yeh ek tarah ka "Global State Management" tool hai, jo small ya medium-sized applications mein Redux ka kaam karta hai.

---

## 🔴 2. Prop Drilling: The Problem

Jab humein data kisi "Grandparent" component se "Grandchild" tak pahunchana hota hai, toh hum beech wale saare components (jo us data ko use nahi kar rahe) ke through props pass karte hain. Isse code ganda (cluttered) aur maintain karna mushkil ho jata hai. Is problem ko **Prop Drilling** kehte hain.

---

## 🛠️ 3. Main Pillars (Terminology)

Context API ke 3 main parts hote hain:

1. **React.createContext():** Yeh ek "Context Object" banata hai. Iske bina hum context use nahi kar sakte.
2. **Provider:** Yeh ek wrapper component hai jo data "provide" karta hai. Isme ek `value` prop hoti hai jisme hum apna state ya data rakhte hain.
3. **Consumer / useContext():** Jo components data ko "read" karna chahte hain, wo Consumer ya **`useContext` Hook** ka use karte hain. (Modern React mein `useContext` hook hi standard hai).

---

## ⚖️ 4. Context API vs Redux (Interview Favorite!)

Interviewer aksar puchte hain: *"Jab Context API hai toh Redux kyun use karein?"*

  
| Feature        | Context API                          | Redux                                      |
|----------------|--------------------------------------|--------------------------------------------|
| **Setup**      | Bahut easy, built-in hai.            | Thoda complex setup (Store, Reducers, Actions). |
| **Performance**| High-frequency updates mein slow ho sakta hai (Re-rendering issue). | Bahut efficient hai, specifically optimized for speed. |
| **Debugging**  | Basic debugging tools.               | Redux DevTools jaisa powerful tool milta hai. |
| **Usage**      | Small to Medium apps ke liye best.   | Large scale, complex state management ke liye. |

---

## ⚠️ 5. Best Practices & Limitations

* **Don't Overuse:** Har cheez ke liye context mat banao. Agar data sirf 2 levels tak ja raha hai, toh props hi better hain.
* **Performance Issue:** Jab Context ki value change hoti hai, toh us Provider ke andar ke **saare consumers** re-render hote hain. Isse bachne ke liye Context ko "split" karna chahiye (e.g., ThemeContext alag, AuthContext alag).
* **Use for Static Data:** User details, Theme (Light/Dark mode), ya Language settings jaise data ke liye yeh perfect hai.

---

## 💡 6. Quick Revision Points (Flashcards)

* **Q: Kya Context API Redux ko replace kar sakta hai?**
* Ans: Haan, chote apps mein. Par bade apps mein Redux ke debugging aur middle-ware features behtar hote hain.


* **Q: Context API use karne ke liye kya external library chahiye?**
* Ans: Nahi, yeh React ka core part hai.


* **Q: Re-rendering kaise rokein?**
* Ans: Context ko divide karke ya `useMemo` ka use karke.

** */