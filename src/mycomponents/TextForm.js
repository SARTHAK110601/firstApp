import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");

  const handleUpclick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handleDownclick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(Text);
  };

  const handleonchange = (event) => {
    // event is the change when something new is entered inthe textarea
    // below statement direct the change i.e. event to value which is {Text}
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>{props.heading}</h3>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={Text}
          onChange={handleonchange} // this is needed to change entered text in textarea
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#021e2e",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary m-1 " onClick={handleUpclick}>
        Change to Uppercase
      </button>
      <button className="btn btn-primary m-1" onClick={handleDownclick}>
        Change to Lowercase
      </button>
      <button className="btn btn-primary m-1" onClick={handleClear}>
        Clear Text
      </button>
      <button className="btn btn-primary m-1" onClick={handleCopy} id="copy">
        Copy Text
      </button>

      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            Text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {Text.length} characters
        </p>
        <h3>Preview</h3>
        <p>{Text}</p>
      </div>
    </>
  );
}
