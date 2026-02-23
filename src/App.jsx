import { Routes, Route, Link } from "react-router";
import Home from "./Home"; // Ensure your import paths are correct
import About from "./About";
import Services from "./Services.jsx";
import Blog from "./Blog"
import Error from "./Error404";
 
function App() {
  return (
    <div> 
      {/* Navigation bar that stays on every page */}
      <nav style={{ padding: "20px", background: "#f0f0f0" }}>
        <Link to="/">Home</Link> | 
        <Link to="/about"> About</Link> | 
        <Link to="/services"> Services</Link> |
        <Link to="/blog"> Blogs</Link>

      </nav>

      {/* Where the page content changes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/*" element={<Error />} />
             
      </Routes>
    </div>
  );
}

export default App;