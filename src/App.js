import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
function App() {
  const body = document.getElementsByTagName("body");
  const [theme, setTheme] = useState("");
  const [alert, setAlert] = useState(null);
  function changeMode(event) {
    setTheme(event.target.className);
    body[0].classList.replace(body[0].className, event.target.className);
    showAlert(
      event.target.className.charAt(0).toUpperCase() +
        event.target.className.slice(1) +
        " mode enabled"
    );
  }

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <Router>
      <div>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          darkMode={theme}
          changeTheme={changeMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter Text Below" />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
