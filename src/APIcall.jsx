import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);


//🧠 Async/Await Proper Pattern  
//   useEffect(() => {
//   const fetchData = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log(data);
//   };

//   fetchData();
// }, []);

  

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;


//listen-it results in infinite loop 
//  useEffect(() => {
//   setCount(count + 1);
// }, [count]);
