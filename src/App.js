import { useState } from "react";
import './App.css';
import Navbar from "./Navbar.js";
import Textform from "./textform.js";
import About from "./About.js";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app${isDarkMode ? " dark-mode" : ""}`}>
      <Navbar />
      <div className="container my-3">
        <Textform heading="Enter the Text to Analyze Below" />
      </div>
      <About
       
      />
    </div>
  );
}

export default App;
