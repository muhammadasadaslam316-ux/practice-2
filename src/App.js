import { useState } from "react";
import './App.css';
import Navbar from "./Navbar.js";
import Textform from "./textform.js";
import About from "./About.js";
import Alert from "./Alert.js";

function App() {
  const [Mode, setMode] = useState('dark');
  const toggleMode = () => {
    const nextMode = Mode === 'dark' ? 'light' : 'dark';
    setMode(nextMode);
    showAlert(`${nextMode} mode has been enabled`, "Success");
  };
  const toggleMode1 = () => {
    const nextMode = Mode === 'dark' ? 'grey' : Mode === 'grey' ? 'light' : 'dark';
    setMode(nextMode);
    showAlert(`${nextMode} mode has been enabled`, "Success");
  };

  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
  };
 
  return (
    <div className={`app ${Mode}-mode`}>
      <Navbar mode={Mode} toggleMode={toggleMode} toggleMode1={toggleMode1} />
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
