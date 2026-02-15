import CustomInput from "./useIdHook";


function App() {
  return (
       <div style={{ padding: "20px" }}>
      <h2>Real-World useId Demo</h2>
      {/* Same component use karne par bhi unique IDs generate hongi */}
      <CustomInput label="First Name" />
      <CustomInput label="Last Name" />
      <CustomInput label="Email" type="email" />
    </div>
  );
}
export default App;  