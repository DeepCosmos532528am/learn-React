
import { createContext, useContext, useState } from "react";

const BioContext = createContext();

export function BioProvider({ children }) {
  const myName = "Rohan"
  const myAge = 30;
  console.log(children)

  return <div>
    <BioContext.Provider value={{ name: myName, age: myAge }}>
      {children}
    </BioContext.Provider>
  </div>
}

//custom hooks

const useBioContext = () => {
  const context = useContext(BioContext);
  // Safety check: if the hook is used outside of a Provider
  if (context === undefined) {
    throw new Error("useBioContext must be used within a BioProvider");
  }
  return context


}
export function User(){
  return <BioProvider><Profile/></BioProvider>
}

function Profile() {
  const { name } = useBioContext(); // This works because Profile is a child!
  return <div>Welcome, {name}</div>;
}


export default BioProvider














// Rules for Custom Hooks in React

// 1. Prefix with "use":
//    - Custom hooks must start with "use" (e.g., useFetch, useAuth).
//    - Ensures React can enforce hook rules.

// 2. Use Built-in Hooks:
//    - Leverage React’s built-in hooks (useState, useEffect, useContext, etc.).
//    - Encapsulate state and lifecycle logic.

// 3. Manage Side Effects Inside Hooks:
//    - Handle data fetching, subscriptions, or DOM interactions inside useEffect or other hooks.
//    - Avoid side effects outside hook functions.

// 4. Keep Hooks Pure:
//    - Hooks should return values or functions for components to use.
//    - Avoid mutating external state directly.

// Additional Best Practices (often considered essential):
// 5. Reusability:
//    - Design hooks to be reusable across multiple components.
//    - Accept parameters to make them flexible.

// 6. Consistency:
//    - Follow naming conventions and keep logic focused.
//    - A hook should do one clear job.

// 7. Avoid Conditional Hook Calls:
//    - Never call hooks inside loops, conditions, or nested functions.
//    - Always call hooks at the top level of your custom hook.

// 8. Testing & Documentation:
//    - Document expected inputs/outputs.
//    - Write tests for complex hooks to ensure reliability.
