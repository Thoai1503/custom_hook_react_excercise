import "./App.css";

function App() {
  const [value, setValue] = React.useState("Hello, World!");
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
