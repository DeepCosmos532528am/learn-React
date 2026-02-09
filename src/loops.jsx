import React from 'react';

/**
 * 📝 QUICK NOTES ON LOOPS IN REACT:
 * * 1. Array Loop: 'map()' use hota hai. Ye har item ke liye JSX return karta hai.
 * 2. Object Loop: Objects par direct map nahi chalta. 
 * Pehle 'Object.keys()', 'Object.values()', ya 'Object.entries()' use karke 
 * use array banana padta hai.
 * 3. Key Prop: Har loop item mein ek unique 'key' honi chahiye (Performance ke liye).
 * 4. Conditional Loops: 'filter()' use karo agar sirf kuch items dikhane hon.
 */

const LoopDemo = () => {
  // 1. Simple Array
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

  // 2. Array of Objects (Most Common)
  const users = [
    { id: 101, name: 'Rahul', role: 'Dev' },
    { id: 102, name: 'Amit', role: 'Designer' },
    { id: 103, name: 'Sneha', role: 'Manager' },
  ];

  // 3. Simple Object (Dictionary style)
  const courseDetails = {
    title: 'React Mastery',
    duration: '30 Days',
    level: 'Intermediate',
    price: 'Free'
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React Looping Guide 🚀</h1>
      <hr />

      {/* --- ARRAY LOOPING --- */}
      <section>
        <h2>1. Array Loop (Using .map)</h2>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </section>

      {/* --- ARRAY OF OBJECTS --- */}
      <section>
        <h2>2. Array of Objects (Table Format)</h2>
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* --- OBJECT LOOPING --- */}
      <section>
        <h2>3. Object Loop (Using Object.entries)</h2>
        <p><i>Note: Object ko pehle array mein convert karna padta hai</i></p>
        <div style={{ background: '#ff1919', padding: '10px', borderRadius:'10px'  }}>
          {Object.entries(courseDetails).map(([key, value]) => (
            <div key={key}>
              <strong>{key.toUpperCase()}:</strong> {value}
            </div>
          ))}
        </div>
      </section>

      {/* --- CONDITIONAL LOOPING --- */}
      <section>
        <h2>4. Filter + Map (Only Admins/Managers)</h2>
        <ul>
          {users
            .filter(user => user.role === 'Manager')
            .map(user => (
              <li key={user.id}>{user.name} - {user.role}</li>
            ))
          }
        </ul>
      </section>
    </div>
  );
};

export default LoopDemo;