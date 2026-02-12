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

  function func() {
    console.log("Main Component")
  }
  func()

  //-------Return the UI----------------------------------
  return (
    <div style={{ padding: '30px' }}>
      <h1>Hello, Counter is: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
      <button onClick={() => setData(data + 1)}>data:{data}</button>
      <User />{/**as this component called here it will also be re-rendered, and checked for any state change, even if have not passed anything still react will check for any state update to update the UI likewise.*/}

      <User2 prop={{ counts: counter, data: data }} />
    </div>
  );
};

//  see the child component also rendered in the same way as the parent, becuase it is called in the parent component, so child component in one way is the part of parent component only. 

//hence any function call or in general and broad term the re-rendering, in the child will indeed be triggred on any changes in child component state but also will be rendered on any state change in parent also.

//if the child is consuming any prop passed from parent, and there is any change in that particular parent state lined to the child also, the child also will use that. Obviously its very obvious, I know You know! 

////here as the updated state prop counts coming here updated, User Component is getting updated everytime, we can see in the console in the browser, this function executes on every change on state in the parent Component. 

// Let's handle this, by using useEffect hook!


function User() {
  function funcCall() {
    console.log("Child compo,rendered on trigger of parent render")
  }
  //here we can handle this unwanted re rendering by using useEffect hook, but I have intentionally commented out it below, so that you can see the effect in the console for this function call funcCall(). Happy funcCall()! 

  // useEffect(function (){funcCall},[]) //comment out and check console on every change and re-render

  return <h1> Hey</h1>
} //This function renders everytime

//let's create one component where we will see how that component being a child component will consume the prop and is handeled by the useEffect for preventing the unwanted function call in that.

const User2 = ({ prop }) => {

  //Now I want the function to be called when there is any update in the counter state only, but not any unwanted call and UI showing for data state update,UI for data update in this compo. will be shown on updating the counter only lets use useEffect hook for handling this   

  const [a, setCount] = useState('')
  const [b, setData] = useState('')

  useEffect(() => { func() }, [prop.counts]) //prop.count state change pe hi current value from the parent will be provided to this child compo, but on data  update useEffect call hi nahi hone dega func() ko so setData me new value enter hi nahi kar payegi , hence no UI update for the data in returning JSX element below in this component.

  function func() {
    setCount(prop.counts)  
    setData(prop.data)
    console.log(`counter : ${a} \n data: ${b}`)

  }

  return <h1>counter: {a} <br></br> dat:{b}</h1>
}



export default UseEffectComponents;