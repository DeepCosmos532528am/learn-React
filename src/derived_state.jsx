import { startTransition, useState, useTransition } from 'react';
// 📝 Derived State in React — Interview Notes (Hinglish)

// 👉 Definition:
// Derived state matlab wo data jo aap directly props ya existing state se calculate kar sakte ho. 
// Isko alag se state me store karna unnecessary hai.

// 👉 Example:
// - Agar parent se "users" array aa raha hai, aur child ko sirf active users dikhane hain:
//   ❌ Galat: const [activeUsers, setActiveUsers] = useState(users.filter(u => u.active));
//   ✅ Sahi: const activeUsers = users.filter(u => u.active);

// 👉 Props ka role:
// Props parent se aa sakte hain as:
// - State values (e.g. count)
// - Constants (e.g. "Hello")
// - Derived/computed values (e.g. items.filter(...))
// - Functions (e.g. onClick handler)

// Props hamesha state hi nahi hote, wo koi bhi value ho sakte hain. 
// Rule ye hai: agar child component apne props se kuch derive kar sakta hai, to usko apne state me duplicate mat karo.

// 👉 Why avoid storing derived state:
// - Duplication hoti hai → bugs aur inconsistency aati hai.
// - Source of truth unclear ho jata hai.
// - Parent update hone par child ka derived state stale ho sakta hai.

// 👉 Best Practices:
// - Minimal state rakho: jo directly derive nahi ho sakta, sirf wahi store karo.
// - Derived values ko directly compute karo props/state se.
// - Agar calculation heavy hai to useMemo use karo:
//   const filteredItems = useMemo(() => items.filter(i => i.active), [items]);
// - Agar multiple components ko same derived data chahiye, to state ko lift up karo.


function DerivedState() {

    const [userObj, setuserObj] = useState([{
        name: 'Sachin',
        age: 21
    },
    {
        name: 'Mahendra',
        age: 17
    },
    {
        name: 'Ravi',
        age: 23
    }])

    const total_user = userObj.length; //This is the derived state here.


    const avg_of_userages = (userObj.reduce((accum, currval) => accum + currval.age, 0)) / total_user


    return <div>
        <ul>
            {userObj.map((item, index) =>
            (<li key={item} >
                {item.name} - {item.age} years old
            </li>
            ))}

        </ul>
        <p>{total_user}</p>
        <p>{avg_of_userages}</p>



    </div>

}
//----------------------------------------------------------------

export default DerivedState;