import React from "react";
import Navbar from "./mycomponents/Navbar";
import { useState } from "react";
import TextForm from "./mycomponents/TextForm";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#021e2e";

      console.log("works");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="Vrifin"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />

      <div className="container my-3">
        <TextForm heading="Enter your text here to manupulate" mode={mode} />
      </div>
    </>
  );
}

export default App;
