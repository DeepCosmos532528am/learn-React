import { useEffect, useState } from 'react';
/**React Hooks & useEffect – Quick Note

Hooks are special functions in React that allow functional components to use state, lifecycle methods, and other React features without writing class components. The most common hooks are useState for managing component state and useEffect for handling side effects.

useEffect is used to perform side effects, which are operations that happen outside the normal rendering flow, such as API calls, timers, subscriptions, logging, or manually updating the DOM. It runs after rendering, and its behavior can be controlled using dependencies:

1. An empty dependency array ([]) makes it run once on mount,
2. Specific dependencies ([state/prop]) make it run when those values change,
3. No array makes it run after every render.

It also supports cleanup functions, which help prevent memory leaks by cleaning timers, subscriptions, or event listeners when the component unmounts or before the effect re-runs.

In short: Hooks enable functional components to have state and lifecycle capabilities, and useEffect manages all side effects in a predictable and controlled way, keeping React applications efficient and maintainable. */




const UseEffectComponents = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  //when even the empty dependecy array is not passed---- 
  useEffect(() => {countonCall()})

  function countonCall() {
    console.log("no dependecy array given, Har render par chalega")
  }

  //when want to just call the function one time the component renders, provide no dependency empty array----

  //countOnCall()//go in browser and look in console in inspection window. Issue is on clicking the buttom, click event occurs and it changes just the state of counter i.e. updating the value, but why this function,countOnCall() is getting call everytime. This is because, on each state update the component re-renders, so this function also gets call everytime. Solution is useEffect

  useEffect(() => { countOnCall1() }, []) //  this get called for one time when the component renders for the first time
  function countOnCall1() {
    console.log("no dependency state..,Sirf Pehli baar (Mounting)")
  }

  //when want to pass one state---------------------------

  useEffect(() => { countOnCall2() }, [data])

  function countOnCall2() {
    console.log("Sirf Data change par,One dependency state...")
  }//But this function be called on every time the state changes of the data state only, but still for counter state it will not be called as there is only data there in dependency array of the useEffect above.

  //Passing more than one state---------------------------

  useEffect(() => { countOncall3() }, [data, counter])

  const countOncall3 = () => { console.log("Data ya Counter change par,more than one dependency state...") }

  //-------Return the UI----------------------------------
  return (
    <div style={{ padding: '30px' }}>
      <h1>Hello, Counter is: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
      <button onClick={() => setData(data + 1)}>data: {data}</button>
    </div>
  );
};




export default UseEffectComponents;