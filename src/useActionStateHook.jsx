import { useActionState } from "react";

// Ye humari "Server Action" function hai
async function joinTeamAction(prevState, formData) {
  const name = formData.get("username");
  // Fake API call (Simulating Java Backend)
  await new Promise((res) => setTimeout(res, 2000));

  if (name === "Sachin") {
    return { message: "Welcome back, Sachin!", success: true, name:name };
  } else {
    return { message: "User not found in Database.", success: false, name:"" };
     
}


}

function JoinTeamForm() {
  // state: result of the action
  // formAction: pass this to the form
  // isPending: true while waiting for 2 seconds
  const [data, formAction, isPending] = useActionState(joinTeamAction, {
    message: "",
    success: false,
    name:"No Name yet"
  });
//   console.log(data)

  return (
    <form action={formAction}>
      <input type="text"  
      defaultValue={data.name} // This RETAINS the value!
       name="username" placeholder="Enter Name" required />
      
      {/* Button automatically disables while loading */}
      <button type="submit" disabled={isPending}>
        {isPending ? "Joining..." : "Join Team"}
      </button>

      {/* Backend se aaya hua message display karo */}
      {data.message && (
        <p style={{ color: data.success ? "green" : "red" }}>
          {data.message}
        </p>
      )}
    </form>
  );
}

export default JoinTeamForm;

/**# 📋 React 19: useActionState Interview Deep-Dive

## 1. Definition & Purpose
`useActionState` is a React 19 hook designed to handle "Actions" (functions that perform side effects, usually async). It automates the management of three things:
- The result of the action (**State**).
- The transition status (**isPending**).
- The connection between logic and the HTML form (**formAction**).

---

## 2. Syntax Breakdown
const [state, formAction, isPending] = useActionState(fn, initialState);

| Variable | Role | Logic |
| :--- | :--- | :--- |
| **fn** | The Worker | An async function that receives `(prevState, formData)`. |
| **initialState** | The Starter | The value of `state` on the first render. |
| **state** | The Result | Whatever `fn` returns (e.g., success message, error object). |
| **formAction** | The Bridge | Passed directly to `<form action={formAction}>`. |
| **isPending** | The Status | Automatically becomes `true` while the async `fn` is running. |

---

## 3. The Lifecycle Flow (The "Circular" Logic)
1. **Initial:** Component mounts; `state` = `initialState`, `isPending` = `false`.
2. **Trigger:** User clicks submit. `formAction` is called automatically.
3. **Pending:** React immediately sets `isPending` to `true`. UI stays responsive.
4. **Execution:** The `fn` runs. It pulls values from `formData` and calls the Backend API.
5. **Completion:** `fn` returns a value. React updates `state` with this value and sets `isPending` to `false`.

---

## 4. Key Problem Solved: Retaining Values
In React 19, we use **Uncontrolled Components** for performance. To keep data in the field after a server error:
1. Return the typed data inside the error object from `fn`.
2. Use `defaultValue={state.enteredName}` on the input.
3. **Crucial:** Use `key={state.enteredName}` to force the input to refresh when the state returns from the server.

---

## 5. Top 5 Real Interview Questions (Real-World)

Q1: Why use useActionState instead of manual useState for loading/error?
A: It reduces "boilerplate" code. Instead of manually writing `setLoading(true)`, `setError(null)`, and `try/catch` in every handler, React 19 manages the entire lifecycle automatically through the hook.

Q2: Does useActionState require e.preventDefault()?
A: No. When passed to the `action` prop of a form, React handles the submission natively, preventing the default page reload automatically.

Q3: What is the significance of the "prevState" argument in the action function?
A: It allows the action to depend on the result of the previous submission. This is useful for "State Accumulation" (e.g., adding items to a list where each return becomes the new base for the next action).

Q4: How does isPending improve User Experience (UX)?
A: It utilizes React's Concurrent Rendering. Unlike a manual `isLoading` state, `isPending` tells React that this update is a "Transition," meaning the UI remains responsive and won't freeze while the background task runs.

Q5: Why is 'key' needed when using defaultValue with this hook?
A: Since `defaultValue` only sets the value when an element is first rendered, changing the `state` won't update the input box. By changing the `key`, we force React to discard the old input and create a new one with the updated value.

---

## 6. Pro-Tip for JFS Developers
Mention that `useActionState` is designed to work seamlessly with **Server Actions**. In a Java Full Stack environment, this hook acts as the "glue" that keeps the Frontend UI in sync with the Java Spring Boot API responses without needing complex global state management (like Redux) just for form feedback. */