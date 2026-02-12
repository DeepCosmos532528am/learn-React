//Very important. Interview favourite.

import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("Cleanup");
    };
  }, []);

  return <h1>Timer</h1>;
}

export default Timer;


/**Cleanup runs:

Before component unmount

Before effect re-runs */