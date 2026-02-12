// 🧠 useEffect + Event Listener Example

import {useState, useEffect } from "react";

function Resize() {
  const [winWidth, setwinWidth] = useState('UnKnown');

  useEffect(() => {
    const handleResize = () => {
      setwinWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <h1>Resize Listener says the width is {winWidth}</h1>;
}

export default Resize;
