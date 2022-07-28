import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./components/navigationBar";

function App() {
  const [fontSize, setFontSize] = useState(12);

  return (
    <div>
      <header className="App-header">
        <NavigationBar />
        <text style={{ fontSize: fontSize }}>test font</text>
        <button onClick={() => setFontSize(fontSize + 1)}>+</button>
        <button onClick={() => setFontSize(fontSize - 1)}>-</button>
      </header>
    </div>
  );
}

export default App;
