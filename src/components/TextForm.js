import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared Successfully", "success");
  };

  const handleUpCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var textarea = document.getElementById("myBox");
    textarea.select();
    textarea.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(textarea.value);
    props.showAlert("Text Copied Successfully", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra Spaces Removed Successfully", "success");
  };

  const handleTitleCase = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Converted to Title Case!", "success");
  };

  const handleReverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text Reversed!", "success");
  };

  const handleRemoveNumbers = () => {
    let newText = text.replace(/[0-9]/g, "");
    setText(newText);
    props.showAlert("Numbers Removed!", "success");
  };

  const getVowelCount = () => {
    return (text.match(/[aeiouAEIOU]/g) || []).length;
  };

  const getConsonantCount = () => {
    return (text.match(/[a-zA-Z]/g) || []).length - getVowelCount();
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#343a40",
              color: props.mode === "light" ? "black" : "white",
            }}
            rows="8"
            onChange={handleOnChange}
            placeholder="Enter your text here..."
          ></textarea>
        </div>

        <div className="row g-2">
          <div className="col-md-6 d-grid">
            <button
              disabled={!text}
              className="btn btn-primary"
              onClick={handleUpCase}
            >
              <i className="bi bi-type-uppercase me-2"></i>Uppercase
            </button>
          </div>
          <div className="col-md-6 d-grid">
            <button
              disabled={!text}
              className="btn btn-primary"
              onClick={handleLoCase}
            >
              <i className="bi bi-type-lowercase me-2"></i>Lowercase
            </button>
          </div>
          <div className="col-md-6 d-grid">
            <button
              disabled={!text}
              className="btn btn-primary"
              onClick={handleTitleCase}
            >
              <i className="bi bi-type me-2"></i>Title Case
            </button>
          </div>
          <div className="col-md-6 d-grid">
            <button
              disabled={!text}
              className="btn btn-primary"
              onClick={handleReverseText}
            >
              <i className="bi bi-arrow-left-right me-2"></i>Reverse
            </button>
          </div>
          <div className="col-md-6 d-grid">
            <button
              disabled={!text}
              className="btn btn-primary"
              onClick={handleCopy}
            >
              <i className="bi bi-clipboard me-2"></i>Copy
            </button>
          </div>
          <div className="col-md-6 d-grid">
            <button
              disabled={!text}
              className="btn btn-primary"
              onClick={handleExtraSpaces}
            >
              <i className="bi bi-backspace me-2"></i>Remove Spaces
            </button>
          </div>
          <div className="col-md-6 d-grid">
            <button
              disabled={!text}
              className="btn btn-primary"
              onClick={handleRemoveNumbers}
            >
              <i className="bi bi-123 me-2"></i>Remove Numbers
            </button>
          </div>
          <div className="col-md-6 d-grid">
            <button
              disabled={!text}
              className="btn btn-danger"
              onClick={handleClearClick}
            >
              <i className="bi bi-trash me-2"></i>Clear Text
            </button>
          </div>
        </div>
      </div>

      <div
        className="container my-5"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <strong>
            {
              text
                .trim()
                .split(/\s+/)
                .filter((word) => word.length !== 0).length
            }{" "}
            words
          </strong>{" "}
          and <strong>{text.replace(/\s/g, "").length}</strong> characters
        </p>
        <p>
          <strong>{0.008 * text.split(/\s+/).filter((w) => w).length}</strong>{" "}
          Minutes Read
        </p>
        <p>
          Vowels: <strong>{getVowelCount()}</strong> | Consonants:{" "}
          <strong>{getConsonantCount()}</strong>
        </p>

        <h2 className="mt-4">Preview</h2>
        <div
          className="p-3 border rounded"
          style={{
            backgroundColor: props.mode === "light" ? "#f8f9fa" : "#212529",
          }}
        >
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textbox above to preview it here."}
          </p>
        </div>
      </div>
    </>
  );
}
