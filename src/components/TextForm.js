import React, { useState } from "react";
import propTypes from "prop-types";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const [vowels, setVowels] = useState(0);
  const vowelChar = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  function handleText(event) {
    setText(event.target.value);
  }
  function toUppercase() {
    let newText = text.toUpperCase();
    setText(newText);
  }
  function toLowercase() {
    let newText = text.toLowerCase();
    setText(newText);
  }
  function clearText() {
    let newText = "";
    setText(newText);
  }
  function countVowels() {
    let res = 0;
    for (let i = 0; i < text.length; i++) {
      for (let j = 0; j < vowelChar.length; j++)
        if (text[i] === vowelChar[j]) res++;
    }
    setVowels(res);
  }
  return (
    <>
      <div className="conatiner">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Text here....."
            rows="10"
            id="myBox"
            name="textArea"
            value={text}
            onChange={handleText}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1"
          type="button"
          onClick={toUppercase}
        >
          CONVERT TO UPPERCASE
        </button>
        <button
          className="btn btn-primary mx-1"
          type="button"
          onClick={toLowercase}
        >
          convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-1"
          type="button"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1"
          type="button"
          onClick={countVowels}
        >
          Count Vowels
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Number of vowels : {vowels}</p>
        <p>
          It will take a slow reader about{" "}
          {(0.008 * text.split(" ").length).toFixed(2)} minutes to read this.
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: propTypes.string,
};
