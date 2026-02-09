import { useState } from 'react'
import { useEffect } from 'react'
//Lets see how to handle the Checkbox input in react. We will create a component that will have a checkbox input and we will handle the change event of the Checkbox input.

function CheckboxInput() {
  const [selectedOption, setSelectedOption] = useState([]);

  const handleOptionChange = (event) => {
    console.log("Event id and the target check status", event.target.id, ":", event.target.checked);
    const { value, checked } = event.target;
    setSelectedOption((prev) =>
      // Functional update (prev => ...) hamesha latest state ki guarantee deta hai
      checked
        ? [...prev, value] //this says Agar checked hai toh add karo. here the new array is being created by [ ] brackets, inwhich the previous array + current event value is being added to spread the values in the new array, so its like selectedOption = [new array assignement] pehle default me empty array diya tha in useState([]). wese yaha .Concat() bhi kaam kar jayega, but spread is more readable and easy to understand.  
        : prev.filter((item) => item !== value) // Agar uncheck hai toh hatao, here the filter method is used to create a new array by filtering out the value that is being unchecked, so its like selectedOption = [new array assignement] pehle default me empty array diya tha in useState([]

    )
  }

  console.log('End.............................')

  return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <h1>Select you Skills</h1>

    <input type="checkbox" value="PHP" id='php' onClick={handleOptionChange} />
    <label htmlFor="php">PHP</label>

    <input type="checkbox" value='Java' id='java' onClick={handleOptionChange} />
    <label htmlFor="java">Java</label>

    <input type="checkbox" value='Python' id="python" onClick={handleOptionChange} />
    <label htmlFor="python">Python</label>

    <input type="checkbox" value='JavaScript' id="javascript" onClick={handleOptionChange} />
    <label htmlFor="javascript">JavaScript</label>

    <h1>The Selected Options are: {(selectedOption.toString()).toUpperCase()}</h1>

  </div>
}

function HandleCheckBox() {

  return (
    <div>
      <h1>Controlled Components Examples</h1>
      <CheckboxInput />
    </div>
  );
}

export default HandleCheckBox;