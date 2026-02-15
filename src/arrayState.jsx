// In React, working with Array State follows the exact same rule as objects: Immutability. You never use push(), pop(), or splice() directly because those modify the original array (mutation), and React won't see the change to trigger a re-render.

// Instead, we use methods that return a new array. Here is how you "play" with arrays in state:

import React, { useState } from 'react';

/**
 * 📝 QUICK CHEAT SHEET FOR ARRAY STATE
 * ------------------------------------------------------------------
 * | ACTION    | METHOD TO USE (✅)      | DO NOT USE (❌)           |
 * |-----------|-----------------------|---------------------------|
 * | Add       | Spread [...arr, item] | push(), unshift()         |
 * | Remove    | filter()              | splice(), pop()           |
 * | Update    | map()                 | arr[index] = newValue     |
 * | Sort      | [...arr].sort()       | sort() (Directly)         |
 * ------------------------------------------------------------------
 */

function ArrayStateMaster() {
  // 1. SIMPLE ARRAY: Just a list of strings (Skills)
  const [skills, setSkills] = useState(["Java", "React", "PostgreSQL"]);

  // 2. ARRAY OF OBJECTS: Complex data (Internship Team)
  const [team, setTeam] = useState([
    { id: 1, name: "Sachin", role: "Full Stack" },
    { id: 2, name: "Raghav", role: "Backend" }
  ]);   

  // --- 🛠️ SIMPLE ARRAY OPERATIONS ---

  const addSkill = () => {
    // Sahi Tarika: Naya array dabba banaya aur purana saaman spread kar diya
    // push() isliye nahi kyunki wo purane dabbe ko hi modify karta hai
    setSkills([...skills, "Spring Boot"]);
  };

  const removeSkill = (skillName) => {
    // filter() check karta hai: "Jo skillName ke barabar nahi hai, unhe rehne do"
    // Ye ek brand new array return karta hai
    setSkills(skills.filter(item => item !== skillName));
  };

  // --- 🛠️ ARRAY OF OBJECTS OPERATIONS ---

  const addMember = () => {
    const newMember = { 
        id: Date.now(), // Unique ID generate karne ke liye
        name: "Naman", 
        role: "Intern" 
    };
    // Pehle purani team copy karo, phir naya member add karo
    setTeam([...team, newMember]);
  };

  const promoteMember = (targetId) => {
    // map() hamesha update ke liye use hota hai
    // Hum har member ko check karte hain: "Kya teri ID match hui?"
    const updatedTeam = team.map(member => {
      if (member.id === targetId) {
        // Match hone par: Naya object banao (Spread) aur role badal do
        return { ...member, role: "Senior Developer" };
      }
      // Match nahi hone par: Purana member jaisa hai waisa hi rehne do
      return member;
    });
    setTeam(updatedTeam);
  };

  const deleteMember = (targetId) => {
    // Specific ID wale member ko list se nikaal do
    setTeam(team.filter(member => member.id !== targetId));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React Array State Guide (Sachin's Notes)</h1>

      {/* SECTION 1: SIMPLE ARRAY */}
      <section style={{ marginBottom: '40px' }}>
        <h2>1. Simple Array (Skills List)</h2>
        <p><i>Method Used: Spread for Add, Filter for Delete</i></p>
        <ul>
          {skills.map((s, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              {s} 
              <button onClick={() => removeSkill(s)} style={{ marginLeft: '10px' }}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={addSkill} style={{ background: 'lightgreen' }}>+ Add Spring Boot</button>
      </section>

      <hr />

      {/* SECTION 2: ARRAY OF OBJECTS */}
      <section style={{ marginTop: '20px' }}>
        <h2>2. Array of Objects (Internship Team)</h2>
        <p><i>Method Used: Map for Update, Filter for Delete</i></p>
        {team.map((member) => (
          <div key={member.id} style={{ 
            border: '1px solid #ccc', 
            padding: '10px', 
            margin: '10px 0',
            borderRadius: '8px' 
          }}>
            <strong>{member.name}</strong> - {member.role}
            <div style={{ marginTop: '10px' }}>
              <button onClick={() => promoteMember(member.id)} style={{ marginRight: '5px' }}>Promote</button>
              <button onClick={() => deleteMember(member.id)} style={{ color: 'red' }}>Delete</button>
            </div>
          </div>
        ))}
        <button onClick={addMember} style={{ background: 'lightblue', padding: '10px' }}>+ Add New Intern</button>
      </section>
    </div>
  );
}

export default ArrayStateMaster;