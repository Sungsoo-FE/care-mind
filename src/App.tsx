import React, { useState } from "react";
import "./App.css";
import Description from "./components/description";
import NavigationBar from "./components/navigationBar";

function App() {
  const [changedFontSize, setChangedFontSize] = useState(0);

  return (
    <div>
      <header className="App-header">
        <NavigationBar changedFontSize={changedFontSize} />
        <div style={{ paddingLeft: 12, paddingRight: 12 }}>
          <text style={{ fontSize: 12 + changedFontSize }}>
            current font size is {changedFontSize + 12}
          </text>
          <Description changedFontSize={changedFontSize} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <button onClick={() => setChangedFontSize(changedFontSize + 1)}>
              +
            </button>
            <button onClick={() => setChangedFontSize(changedFontSize - 1)}>
              -
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
