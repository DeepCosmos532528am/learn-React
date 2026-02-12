import React from "react";

class UnmountExample extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Running...");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Unmounted");
  }

  render() {
    return <h1>Unmount Example</h1>;
  }
}

export default UnmountExample;
