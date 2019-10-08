import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Room from "./room";

function Index() {
  return (
    <div className="Index">
      <Room />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
