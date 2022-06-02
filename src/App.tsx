import React from "react";
import "./App.css";

import { Display } from "./components/display";
import { Info } from "./components/info";

function App() {
    return (
        <div className="container">
            <Info></Info>
            <Display></Display>
        </div>
    );
}

export default App;
