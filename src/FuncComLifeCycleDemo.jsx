import React, { useEffect, useState } from 'react';

/** 
 * React Lifecycle & useEffect – Short Notes

1. React Component Lifecycle (Functional & Class Components)
Mounting: When a component is created and inserted into the DOM.
Updating: When component props or state changes, triggering re-render.
Unmounting: When a component is removed from the DOM.
Error Handling: When a component throws an error during rendering, lifecycle methods can catch it.

2. Lifecycle in Functional Components
Functional components do not have traditional lifecycle methods like class components (componentDidMount, componentDidUpdate, componentWillUnmount).
useEffect hook provides a way to replicate lifecycle behavior in functional components.

3. Role of useEffect
Side-effect management: Perform tasks like API calls, subscriptions, timers, or DOM manipulations.
Mounting behavior: useEffect with an empty dependency array [] acts like componentDidMount.
Updating behavior: useEffect with dependencies [dep1, dep2] runs when those values change, similar to componentDidUpdate.
Cleanup / Unmounting: Returning a function inside useEffect runs on unmount, similar to componentWillUnmount.
Single API for multiple lifecycle events: useEffect replaces the need for multiple separate lifecycle methods in class components.

4. Best Practices
Avoid side-effects directly in the render body.
Always declare dependencies correctly to prevent unnecessary re-renders or stale data.
Use cleanup function to avoid memory leaks (e.g., unsubscribing listeners, clearing timers).

5. Summary
useEffect = “All-in-one lifecycle management” for functional components.
Mount → Update → Unmount behaviors can all be handled via useEffect.
Essential for managing side-effects in modern React.
 */

function LifecycleDemo() {

  const [count, setCount] = useState(0);
  const [showChild, setShowChild] = useState(true);
  const [triggerError, setTriggerError] = useState(false);

  // MOUNT (runs once)
  useEffect(() => {
    console.log("Mounting: Component mounted");

    return () => {
      console.log("Unmounting: Component removed from DOM");
    };
  }, []);

  // UPDATE (runs when count changes)
  useEffect(() => {
    if (count > 0) {
      console.log("Updating: Count changed to", count);
    }
  }, [count]);

  // Simulated Error Handling (Functional way)
  if (triggerError) {
    throw new Error("Manual error triggered");
  }

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <br /><br />

      <button onClick={() => setShowChild(!showChild)}>
        {showChild ? "Unmount Child" : "Mount Child"}
      </button>

      <br /><br />

      <button onClick={() => setTriggerError(true)}>
        Trigger Error
      </button>

      {showChild && <ChildComponent />}
    </div>
  );
}

function ChildComponent() {

  useEffect(() => {
    console.log("Child Mounted");

    return () => {
      console.log("Child Unmounted");
    };
  }, []);

  return <h3>Child Component</h3>;
}

export default LifecycleDemo;


//🧠 Multiple useEffect Pattern (Best Practice)

// useEffect(() => {
//   console.log("Mounted once");
// }, []);

// useEffect(() => {
//   console.log("Count changed");
// }, [count]);

// Never put everything in one effect. Split logically.
