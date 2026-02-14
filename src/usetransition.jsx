import { useState, useTransition } from 'react';

/**📌 React useTransition Hook Notes

1. Purpose:
   - Allows you to mark state updates as "non-urgent".
   - Keeps the UI responsive while scheduling heavy updates in the background.

2. Syntax:
   const [isPending, startTransition] = useTransition();

   - isPending → Boolean flag (true when transition is active).
   - startTransition(callback) → Wrap non-urgent state updates inside this.

3. Behavior:
   - Urgent updates (like typing in an input) happen immediately.
   - Non-urgent updates (like rendering a huge list) are deferred.
   - React may interrupt or delay transitions depending on user interactions. */


function TransitionHook() {
    //   const [input, setInput] = useState("");
    //   const [list, setList] = useState([]);
    //   const [isPending, startTransition] = useTransition();

    //   const handleChange = (e) => {
    //     setInput(e.target.value); // urgent update

    //     startTransition(() => {
    //       const bigList = Array(10000)
    //         .fill()
    //         .map((_, i) => e.target.value+ 1);

    //       setList(bigList); // non-urgent
    //     });
    //   };

    //   return (
    //     <>
    //       <input onChange={handleChange} />
    //       {isPending && <p>Loading...</p>}
    //       {list.map((item, i) => (
    //         <div key={i}>{item}</div>
    //       ))}
    //     </>
    //   );

    //Manual simulation of the useTransition hook..........................................

    const [clicked, setClick] = useState(true)

    async function handleClick() {
        setClick(false)
        await new Promise((resolve) => { setTimeout(resolve, 3000) })

        setClick(true)
    }

    return <div>
        {clicked ? <button style={{ color: 'cream', backgroundColor: 'Red', border: 'none', padding: '8px', borderRadius: '8px' }} onClick={handleClick}>Click on me</button> : <img style={{ objectFit: 'contain', height: '100px' }} src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" />}

    </div>

}
//Using useTransitino()----------------------------------------------------------------

export function UseTransition() {
    const [list, setList] = useState([]);
    const [pending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(() => {
            const bigArray = [];
            for (let i = 0; i < 500; i++) {
                bigArray.push(i);
            }
            setList(bigArray);
        });
    };

    return (
        <div>
            <p>Transition status: {pending ? "Active" : "Idle"}</p>
            <button onClick={handleClick} disabled={pending}>
                {pending ? "Loading..." : "Generate List"}
            </button>

            <ul>
                {list.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default TransitionHook;

/**5. Key Points:
   - Always wrap heavy state updates in startTransition.
   - isPending toggles true/false based on React’s scheduler (not strictly deterministic).
   - Good for large lists, expensive renders, or background updates.
   - Export your component correctly (export default UseTransition).

6. Common Pitfalls:
   - Declaring arrays outside handleClick → stale references.
   - Expecting isPending to change immediately → it updates on next render cycle.
   - Forgetting to show pending state in UI → use a loading indicator.

7. Best Practices:
   - Use Array.from for cleaner array generation.
   - Keep urgent updates outside startTransition.
   - Log or display isPending in the UI instead of relying only on console.log. */