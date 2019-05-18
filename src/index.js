import React from "react";
import ReactDOM from "react-dom";
import { Frame, useCycle } from "framer";

import "./styles.css";

function App() {
  const [x, cycle] = useCycle(0, 60);
  function handleTap() {
    cycle();
  }
  return (
    <div className="App">
      <h1>Hello Victor</h1>
      <Frame width={120} height={60} borderRadius={30} onTap={handleTap}>
        <Frame
          size={60}
          borderRadius={30}
          animate={{ x }}
          transition={{ duration: 0.2 }}
        />
      </Frame>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
