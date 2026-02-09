import {useState} from 'react'
// 📖 All‑in‑One Definition of Controlled Components
// A controlled component in React is a form element (like <input>, <textarea>, or <select>) whose displayed value is always driven by React state, making the state the single source of truth. The component’s value is passed in via props (value={state}), and any user interaction triggers an event handler (like onChange) that updates the state. Because React fully controls the input, the behavior becomes predictable, allowing developers to enforce validation, formatting, and dynamic updates from external sources (such as props or API data). This ensures that the UI and the underlying data are always in sync, whether the change comes from user typing or external logic.

// Why This Matters

//1. Single source of truth: The component’s value is always in sync with React state, making it easier to manage and debug form data.

function SingleSource() {
  const [city, setCity] = useState("Gwalior");

  return (
    <div>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
      />
      <p>React knows the city: {city}</p>
    </div>
  );
}

/**👉 The only place where the real value lives is React state (city). The DOM doesn’t decide anything — it just mirrors the state. That’s why React is the single source of truth. */

//2. Validation and formatting: You can easily enforce input rules (e.g., only numbers, uppercase) and manipulate the value (like converting to uppercase) before updating the state.

//🔹 Example 1: Only Numbers Allowed

function OnlyNumbers() {
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    // Allow only digits
    if (/^\d*$/.test(value)) {
      setAge(value);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={age} 
        onChange={handleChange} 
        placeholder="Enter age"
      />
      <p>Your age: {age}</p>
    </div>
  );
}

/**👉 User agar letters type karega toh wo ignore ho jaayega. Sirf numbers hi accept honge. */

//🔹 Example 2: Force Uppercase

function UppercaseInput() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value.toUpperCase());
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type something"
      />
      <p>Formatted Value: {text}</p>
    </div>
  );
}

/**👉 User jo bhi type karega, wo automatically uppercase mein convert ho jaayega. React is controlling the formatting before it updates the state. */

//🔹 Example 3: Email Validation

function EmailValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Simple validation
    if (!value.includes("@")) {
      setError("Invalid email: must contain @");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <input 
        type="email" 
        value={email} 
        onChange={handleChange} 
        placeholder="Enter email"
      />
      <p>{error}</p>
    </div>
  );
}

/**Yahan tum live validation kar sakte ho. User jaise hi galat format type karega, error message show ho jaayega.*/


//3 Dynamic Updates: Useful when prefilling forms, syncing across components, or resetting after submit.

function DynamicUpdate({ externalValue }) {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(externalValue); // sync with external changes
  }, [externalValue]);

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <p>Dynamic value: {name}</p>
    </div>
  );
}
/** 
Prefilling forms with API data (e.g., user profile).Resetting inputs after submit.Syncing across multiple components. */

export {SingleSource, OnlyNumbers, UppercaseInput, EmailValidation, DynamicUpdate}