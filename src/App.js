import { useEffect } from "react";
import "./App.css";
import { Example1 } from "./pages/Example1";

function App() {

  useEffect(() => {
    console.log('render');
  })

  return (
    <div className="App">
      <Example1 />
    </div>
  );
}

export default App;
