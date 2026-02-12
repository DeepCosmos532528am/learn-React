import React, { useState, useTransition } from "react";

// 1. PureComponent (React.memo) Explained in Hinglish

// What:

// PureComponent ka kaam hai sirf tab render karna jab props ya state change ho.

// Functional components me iska equivalent hai React.memo.

// Why:

// Performance improve karne ke liye.

// Agar parent state update hoti hai, to normal child re-render hota hai, chahe usko koi change na chahiye ho.

// Especially useful hai jab child expensive ho (charts, big lists, tables, dashboard panels).

// How:

// React internally shallow compare karta hai props.

// Agar props same hain → child re-render nahi hota.

// Functional component me:

// const ChildB = React.memo(({ stats }) => {
//   // Sirf props change hone par re-render hoga
// });

function IncrementButtonA({ onChange }) {
  console.log("IncrementButtonA rendered");
  return (
    <button onClick={onChange}>
      Increment from IncrementButtonA
    </button>
  );
}

// IncrementButtonA wrapped with React.memo
const MemoizedIncrementButtonA = React.memo(() => {
  console.log("MemoizedIncrementButtonA rendered");
  return <div>Memoized Increment Button A</div>;
});

export function Parent() {
  const [count, setCount] = useState(0);

  const handleIncrementButtonClick = () => {
    setCount(c => c + 1); // updating Parent state
  };

  console.log("Parent rendered");

  return (
    <div>
      <h1>Count: {count}</h1>
      <IncrementButtonA onChange={handleIncrementButtonClick} />
      <MemoizedIncrementButtonA />
    </div>
  );
}

// ----------------------------
// IncrementButtonB - updates counter
// ----------------------------

function IncrementButtonB({ count, increment }) {
  console.log("IncrementButtonB rendered");
  return <button onClick={increment}>Increment Count: {count}</button>;
}

// ----------------------------
// MemoizedStatsPanel - expensive stats panel
// Using React.memo = functional PureComponent
// ----------------------------

const MemoizedStatsPanel = React.memo(({ stats }) => {
  console.log("MemoizedStatsPanel rendered (stats panel)");
  // Imagine heavy rendering here
  return <div>Stats: {stats.join(", ")}</div>;
});

// ----------------------------
// MemoizedBigList - big list rendered with low-priority (useTransition)
// ----------------------------

const MemoizedBigList = React.memo(({ items }) => {
  console.log("MemoizedBigList rendered (big list)");
  return (
    <div style={{ maxHeight: "150px", overflowY: "auto", border: "1px solid black" }}>
      {items.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
    </div>
  );
});

// ----------------------------
// Dashboard / Parent
// ----------------------------

function Dashboard() {
  const [count, setCount] = useState(0);
  const [stats, setStats] = useState([10, 20, 30]);
  const [items, setItems] = useState([]);
  
  // useTransition for low-priority rendering
  const [isPending, startTransition] = useTransition();

  // ------------------------
  // Handlers
  // ------------------------
  const incrementCount = () => setCount(c => c + 1);

  const updateStats = () => setStats(s => [...s, s.length * 10]);

  const generateBigList = () => {
    startTransition(() => {
      // Low-priority update
      const newList = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
      setItems(newList);
    });
  };

  console.log("Dashboard rendered");

  // ------------------------
  // Render
  // ------------------------
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard Demo</h2>
      
      {/* IncrementButtonB - updates count */}
      <IncrementButtonB count={count} increment={incrementCount} />

      {/* MemoizedStatsPanel - stats panel (memoized, only re-renders on stats change) */}
      <MemoizedStatsPanel stats={stats} />
      <button onClick={updateStats}>Update Stats</button>

      <hr />

      {/* MemoizedBigList - big list rendered with low-priority */}
      <button onClick={generateBigList}>Generate Big List (useTransition)</button>
      {isPending && <p>Loading big list...</p>}
      <MemoizedBigList items={items} />
    </div>
  );
}

/**
 * Console Behavior / Understanding

Initial render:

Dashboard rendered
IncrementButtonA rendered
MemoizedStatsPanel rendered (stats panel)
MemoizedBigList rendered (big list)


Click Increment Count (IncrementButtonB button)

Dashboard rendered
IncrementButtonB rendered


✅ MemoizedStatsPanel did NOT render because React.memo prevented it.

MemoizedBigList also did NOT render (list unchanged).

Click Update Stats

Dashboard rendered
MemoizedStatsPanel rendered (stats panel)


✅ MemoizedStatsPanel rendered because stats changed.

Click Generate Big List

Dashboard rendered
MemoizedBigList rendered (big list)


✅ isPending is true while React renders the huge list.

UI interactions remain smooth because list rendering is low-priority.

4. Key Takeaways (Hinglish)

PureComponent / React.memo = optimization tool, prevents unnecessary child re-render.

useTransition = low-priority UI updates, keeps typing / buttons smooth even with big lists.

Parent re-render normally triggers all children, memoize expensive children.

Immutable data important: arrays/objects copy karo, mutate mat karo.

Real-world use: dashboards, search + suggestion, chart panels, tables.
 */

export default Dashboard;
