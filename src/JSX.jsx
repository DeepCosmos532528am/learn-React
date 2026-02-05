import React from 'react';

//JSX is the syntax extension to JavaScript which looks similar to XML or HTML and is used with React to describe what the UI should look like.Although there is not ant official full form of JSX. But most popular one is Java Script XML. 


// 1. Basic JSX Syntax
// JSX looks similar to HTML but it’s actually JavaScript. You can write JSX inside a function component to describe how the UI should look.

const element = <h1>Hello, world!</h1>// JSX element is an expression like any JavaScript expression

// 2. Expressions in JSX
// You can embed any JavaScript expression within curly braces in JSX.
const name = 'Sachin Sharma';
const myName = <h1>
    Hello my name is {name}
</h1>


// 3. JSX Elements must have one parent element
// If you want to return multiple elements from a component, they must be wrapped in one parent element.

const GreetingMessage = (<div>
    <h1>Hello I am {name}</h1>
    <h2>And I welcome you to my React App</h2>
</div>);

// 4. Self-closing Tags
// Just like HTML, JSX supports self-closing tags for elements like <img />, <br />, <input />.


const inputElement = <input type="text" placeholder="your name" />; // Self-closing tag

// 5. Attributes in JSX
// You can use camelCase for attributes in JSX (e.g., `className` instead of `class`).

const buttonElement = <button className="btn">Click me!</button>

// 6. JSX Expressions and Logic
// You can use JavaScript expressions and logic in JSX, including ternary operators and loops.

const logstatus = true;
let statusMessage = <h1>{logstatus ? 'Yes logged in' : 'Not logged in'}</h1>

let arr = [1, 2, 3, 4, 5];
function Count() {
    return (arr.map((item, index) => <h1>The value is {item} at index {index}
    </h1>))
}

// 7. Using Arrays in JSX
// We can map through an array to render multiple elements in JSX. It’s common for lists or dynamic content.

const array = [10, 20, 30, 40, 50];
function ArrayValues() {
    return (
        array.map(values => <p>The array values are {values}</p>)
    )
}

// 8. Event Handlers in JSX
// React uses camelCase event handlers like `onClick` instead of `onclick`. You can pass functions as handlers.

const handleClick = () => { alert('Button clicked!') };
const alertbutton = <button onClick={handleClick}>Click me!</button>

// 9. Conditional Rendering
// You can conditionally render JSX using JavaScript expressions (ternary operator, &&, etc.).

const status = true;
const content = status && <p>This message is conditionally rendered</p>

// 10. JSX and Component Props
// JSX elements can accept props (attributes) that you can access inside the component.

const ShowGreetings = ({ name = 'Someone' }) => {
    return <h1>{name} wishes you a great day!</h1>
}

// 11. Class vs. className in JSX
// Since `class` is a reserved word in JavaScript, JSX uses `className` for CSS class attributes.

const card = <div className="card">Card content</div>;


// 12. JSX Comments
// You cannot add comments like `<!-- comment -->` in JSX. Instead, use curly braces to add JavaScript comments.

const myComponent = (
    <div>
        {/* This is a comment */}
        <h1>Title</h1>
    </div>
);

// 13. JSX and React Fragments
// If you don't want to add an extra wrapper div, you can use React Fragments to group multiple elements.

const fragmentExample = (
    <>
        <h1>Title</h1>
        <p>Content</p>
    </>
);

// JSX is just syntactic sugar over `React.createElement` calls.
// React elements created from JSX look like this:

const reactElement = React.createElement(
    'h1',
    null,
    'Hello, world!'
);

// // The above JSX code is equivalent to:
// React.createElement( type, // The element type (string for HTML tag or component function/class)
//  props, // An object containing props (or null if none) ...
//  children // One or more child elements or text nodes 
//  );

 /*
 🔑 Key Takeaways for react.createElement(...,...,...)
type → string ('div', 'h1') or component (MyComponent).
props → object with attributes/props, or null.
children → text, JSX, or other React.createElement calls.
JSX is just syntactic sugar for React.createElement. 
*/


function JSXreact() {
    return (
        <div>
            {element}
            {myName}
            {GreetingMessage}
            {inputElement}
            {statusMessage}
            <Count />
            <ArrayValues />
            {alertbutton}
            {content}
            {/* {showGreetings({name: 'Sachin Sharma'})} */}
            <ShowGreetings name="Sachin" />
            <ShowGreetings />
            {card}
            {myComponent}
            {fragmentExample}
            {reactElement}
            <h2>sadsa</h2>
            <h1>This is the Header</h1>
        </div>)
}

export default JSXreact



// Key points for interviews:

// JSX Basics: Understand that JSX is a way to write HTML-like code in JavaScript, and it's transpiled to React.createElement calls.

// Self-closing tags and attributes: JSX uses camelCase for attributes like className, htmlFor, etc.

// Conditional Rendering: Know how to use ternary operators, &&, and other expressions for conditionally rendering JSX.

// Event Handlers: Know how to handle events in JSX (like onClick, onChange).

// Props: Understand how to pass and receive props in functional components.

// Lists in JSX: Be familiar with rendering lists and adding key props for efficient updates.

// This should cover most of the basics for a React interview regarding JSX. Let me know if you want any more specifics!