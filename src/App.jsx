import Header from './Header.jsx'

//In react everything is Component in terms of builduing UI in React 

function App() { //here it is a sample component and for components naming convention needed to be the
  // first letter capital()(Pascal Naming Convention) to diffrentiate it from the function in JS. So app() for components is not allowed for sure here ;)
 
 let addOfTwo = sum(2,3);
   
  return ( 
    <div>{/* this is not the html its JSX */}
      <Header /> {/* //This is How the Component can be called.*/}
      <h1>Sachin Sharma</h1>
       <h3>The Sum of the two values is {addOfTwo}</h3>    
      <h2>Hame tumse ishq kitna</h2>
   
      <Fruit />
      <Color />
    </div>


  )
}

function sum(a, b){ //This is not the component ;). This is the function.
  return a+b;
}

function Fruit() { //sample component 2
  return (
    <div>
      <h1>Apple</h1>
    </div>
  )
}

function Color() {  //sample component 3
  return (
    <div>
      <h3>Red Color</h3>
    </div>
  )
}

export default App;  