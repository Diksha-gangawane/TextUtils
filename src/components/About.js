import React from "react";

export default function About(props) {
  const isLight = props.mode === "light";

  const containerStyle = {
    backgroundColor: isLight ? "white" : "#343a40",
    color: isLight ? "black" : "white",
    borderRadius: "8px",
  };

  const accordionItemStyle = {
    backgroundColor: isLight ? "white" : "#343a40",
    color: isLight ? "black" : "white",
    border: "1px solid",
    borderColor: isLight ? "#dee2e6" : "#495057",
  };

  const accordionButtonStyle = {
    backgroundColor: isLight ? "white" : "#495057",
    color: isLight ? "black" : "white",
  };

  return (
    <div className="container my-5 p-4" style={containerStyle}>
      <h1 className="text-center mb-4">About TextUtils</h1>

      <p className="lead">
        ✨ <strong>TextUtils</strong> is a simple and powerful text utility app
        that helps you analyze, transform, and clean your text with ease.
      </p>

      <div className="accordion" id="accordionAbout">
        {/* Features */}
        <div className="accordion-item" style={accordionItemStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={accordionButtonStyle}
              data-bs-toggle="collapse"
              data-bs-target="#features"
              aria-expanded="true"
              aria-controls="features"
            >
              🔧 Key Features
            </button>
          </h2>
          <div
            id="features"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionAbout"
          >
            <div className="accordion-body">
              <ul>
                <li>🔠 Convert text to Uppercase / Lowercase / Title Case</li>
                <li>✂️ Remove extra spaces and numbers</li>
                <li>🔁 Reverse the text</li>
                <li>📋 Copy to clipboard</li>
                <li>🧠 Get stats like word count, vowels, consonants & reading time</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="accordion-item" style={accordionItemStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={accordionButtonStyle}
              data-bs-toggle="collapse"
              data-bs-target="#usage"
              aria-expanded="false"
              aria-controls="usage"
            >
              📖 How to Use
            </button>
          </h2>
          <div
            id="usage"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionAbout"
          >
            <div className="accordion-body">
              <ol>
                <li>Enter or paste your text in the editor</li>
                <li>Click buttons to apply transformations</li>
                <li>Review the text summary section for analytics</li>
                <li>Toggle between Light and Dark mode as needed</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="accordion-item" style={accordionItemStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={accordionButtonStyle}
              data-bs-toggle="collapse"
              data-bs-target="#tech"
              aria-expanded="false"
              aria-controls="tech"
            >
              🛠️ Technologies Used
            </button>
          </h2>
          <div
            id="tech"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionAbout"
          >
            <div className="accordion-body">
              <ul>
                <li>⚛️ React.js with Functional Components & Hooks</li>
                <li>🎨 Bootstrap 5 for responsive styling</li>
                <li>🧪 JavaScript string utilities</li>
                <li>🌙 Light/Dark mode toggle</li>
                <li>📦 React Router for multi-page navigation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center mt-5" style={{ fontSize: "0.9rem" }}>
        Made with ❤️ by Diksha | TextUtils © 2025
      </footer>
    </div>
  );
}
