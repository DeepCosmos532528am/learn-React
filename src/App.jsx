import BioProvider, {User} from "./customHooks";


function App() {
  return (
       <div style={{ padding: "20px" }}>
        <BioProvider/>
      <User />
    </div>
  );
}
export default App;  