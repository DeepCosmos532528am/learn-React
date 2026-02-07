import { useState } from 'react'

// function Looping() {
// console.log("da")
// }

function App() {
  const [count, setCount] = useState(0);



  return (
    <div>
      <h1>This is my App.jsx {count}</h1>
      <h1>Let's See how can we apply the if-else ladder in React components</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {count > 3 && <button onClick={() => setCount(count - 1)}>Decrement</button>}
      {
        count == 0 ? <h1>The count is {count}</h1> :
          count == 1 ? <h1>The count is {count}</h1> :
            count == 2 ? <h1>The count is {count}</h1> :
              count == 3 ? <h1>The count is {count}</h1> :
                <h1>The count went above {count - 1}</h1>

      }{/*Thsi sis how we can use the if-else ladder in React components*/ }
    </div>
  )
}
export default App;  