import React from "react";
import ReactLS from "./FuncComLifeCycleDemo";
import Users from "./APIcall";
import Timer from "./FuncComCleanUp";
import Resize from "./FuncCompeventlistner";
import MountExample from "./ClassComMounting";
import UnmountExample from "./ClassComUnmountingPhase";
import UpdateExample from "./ClassComUpdating";
function App() {
  return (
    <div>
      <h1>This is my App.jsx</h1>
      {/* Function Component */}
      <ReactLS />
      <Users />
      <Timer />
      <Resize />
      {/* Class components */}
      <MountExample/>
      <UnmountExample/>
      <UpdateExample/> 
    </div>
  )
}
export default App;  