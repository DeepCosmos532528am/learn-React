//Even if you use functional components, you must understand this.

import React from "react";

class MountExample extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  render() {
    console.log("Render");
    return <h1>Mounting Example</h1>;
  }
}

export default MountExample;


//Constructor → Render → componentDidMount
