import { useState } from 'react'
import { useEffect } from 'react'
//Lets see how to handle the Radio input in react. We will create a component that will have a Radio input and we will handle the change event of the Radio input.

function RadioInput() {


  const [gender, setGender] = useState('select your gender');

  const handlegenderChange = (event) => {
    console.log("Event id and the target check status", event.target.id, ":", event.target.checked);
    const { value } = event.target

    setGender(prev => value)
  }

  //This is the not recommended way to handle radio inputs in react.
  // return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
  //   <h1>You are: {gender}</h1>

  //     <input type='radio' value='male' id='male' name='gender' onClick={handlegenderChange} /> 
  //     {/**ye value dalna zaroori hota h inputs me kyu tabhi wo value event.target.value me jaati h  */}
  //   <label htmlFor="id">male</label>
  //   <input type='radio' value='female' id='female' name='gender' onClick={handlegenderChange} />
  //   <label htmlFor="female">Female</label>
  //   <input type='radio' value='other' id='other' name='gender' onClick={handlegenderChange} />
  //   <label htmlFor="other">Other</label>

  return (<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <hr />

    <h1>The recommended way to apply the radio handling</h1>

    <h1>You are: {gender}</h1>


    <input type='radio' value='male' id='male' name='gender' checked={gender == 'male'} onChange={handlegenderChange} /> {/**ye value dalna zaroori hota h inputs me kyu tabhi wo value event.target.value me jaati h  */}
    <label htmlFor="male">male</label>
    <input type='radio' value='female' id='female' name='gender' checked={gender == 'female'} onChange={handlegenderChange} />
    <label htmlFor="female">Female</label>
    <input type='radio' value='other' id='other' name='gender' checked={gender == 'other'} onChange={handlegenderChange} />
    <label htmlFor="other">Other</label>

  </div>)

}


function DropDown() {



  const [course, setCourse] = useState('');

  return (


    <div>
      <hr />
      <h1>DropDown Example: {course}</h1>

      <select defaultValue={"default"} onChange={(e) => setCourse(e.target.value)}>
        <option value="default" disabled>Choose the course you want to fly with</option>
        <option value="Operating System" >Operating System</option>
        <option value="Computer Networks" >Computer Networks</option>
        <option value="data Structure" >Data Structure</option>
      </select>

    </div>
  )

}



function HandleRadio() {

  return (
    <div>
      <h1>Controlled Components Examples</h1>
      <RadioInput />
      <DropDown />
    </div>
  );
}

export default HandleRadio;