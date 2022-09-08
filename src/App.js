import { useState } from "react";
import Checkbox from "./components/Checkbox.tsx";
import "./App.css";

const App = () => {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <Checkbox onChange={setState} checked={state}>Toggle</Checkbox>
    </div>
  );
}

export default App;
