import { use } from "react";
import "./App.css";
import { useLocalStorage } from "./hook/useLocalStorage";
import { useUpdateLogger } from "./hook/useUpdateLogger";

function App() {
  const [value, setValue] = useLocalStorage("name", "");
  useUpdateLogger(value);
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
