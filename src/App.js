import { useState } from "react";
import './App.css';
import Navbar from "./Navbar.js";
import Textform from "./textform.js";
import About from "./About.js";
import Alert from "./Alert.js";

function App() {
  const [Mode, setMode] = useState('dark');
 const toggleMode=()=>{
    if(Mode === 'dark'){
      setMode('light');
    showAlert("light mode has been enabled","Sucess");  
    } else {
      setMode('dark');
      showAlert("dark mode has been enabled","Sucess");  
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
  };
 
  return (
    <div className={`app${Mode === 'dark' ? " dark-mode" : ""}`}>
      <Navbar isDarkMode={Mode} toggleMode={toggleMode}/>
      <Alert Alert={alert} />
      <div className="container my-3">
        <Textform heading="Enter the Text to Analyze Below" showAlert={showAlert} />
      </div>
      <About
      
      />
    </div>
  );
}

export default App;
