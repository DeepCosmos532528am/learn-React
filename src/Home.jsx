// Home.jsx
const Home = () => {
  return (
    <div>
      <h1>Welcome to the HomePage</h1>
      <p>This is where your main content goes.</p>
    </div>
  );
};

export default Home;


/**
 * 🚀 REACT ROUTER INTERVIEW MASTER-SHEET (2026 Edition)
 * ****************************************************
 * Key Concept: SPA (Single Page Application) - Page refresh nahi hota, 
 * sirf Components swap (badalte) hote hain.
 * * Install Command: npm install react-router-dom
 */

/* 1. THE WRAPPER (BrowserRouter)
  - Role: Yeh poori application ki "URL History" ko track karta hai.
  - Interview Nuance: HTML5 History API (pushState, replaceState) use karta hai 
    taaki URL badle bina browser reload huye.
*/

/*
  2. THE NAVIGATOR (Link vs NavLink)
  - Why not <a> tag?: <a> tag browser ko refresh kar deta hai, jisse State 
    loss ho jata hai. <Link> sirf URL badalta hai.
  - NavLink Power: Isme 'isActive' property milti hai. CSS mein .active class 
    daal kar tum batate ho ki user abhi kis page par hai.
*/

/**
 * 🛠️ CORE IMPLEMENTATION EXAMPLE
 * ******************************
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

/* COMPONENT BINDING:
  Navbar ko <Routes> ke BAHAR rakhte hain taaki wo "Persistent" (hamesha dikhne wala) rahe.
*/

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* SHART: NavLink automatically 'active' class add karta hai 
         jab URL match ho jata hai.
      */}
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />

      <main className="main-section">
        {/* 3. THE SWITCH (Routes & Route)
          - <Routes>: Yeh ek container hai jo best match dhoondta hai.
          - <Route>: Isme 'path' (URL) aur 'element' (Component) bind hote hain.
        */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* INTERVIEW TRICK: Dynamic Routing (Params)
            ':' ka matlab hai 'id' kuch bhi ho sakti hai. 
            Isse useParams() hook se access karte hain.
          */}
          <Route path="/user/:id" element={<UserProfile />} />

          {/* 4. 404 PAGE (The Wildcard)
            - path="*" ka matlab hai agar upar koi match nahi mila, toh ye chalega.
          */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer-section">
        <p>Fixed Footer - Won't Re-render on route change</p>
      </footer>
    </Router>
  );
};

/**
 * 🧠 INTERVIEW Q&A BITES (Quick Revision)
 * ***************************************
 * Q1: What is 'Exact' in Route? 
 * Ans: React Router 6 mein 'exact' default hota hai. Pehle hume manually likhna padta tha.
 * * Q2: How to navigate programmatically (e.g., after login)?
 * Ans: Use 'useNavigate()' hook. Example: const nav = useNavigate(); nav('/home');
 * * Q3: Difference between Link and NavLink?
 * Ans: NavLink provides styling attributes (like active class) for navigation menus.
 * * Q4: What is the 'outlet' in nested routing?
 * Ans: Outlet acts as a placeholder for child components in a layout.
 */

export default App;

/* FINAL SUMMARY TABLE:
  -------------------------------------------------------------
  Feature        | Mechanism               | Result
  -------------------------------------------------------------
  BrowserRouter  | History Management      | Clean URLs, Back button works.
  Routes         | Component Matching      | Only specific UI swaps.
  Link           | Client-side Navigation  | No page reload (Smooth Experience).
  useParams      | Data Extraction         | URL se ID nikalne ke liye.
  -------------------------------------------------------------
*/