import { useState } from "react";
import './App.css';
import Navbar from "./Navbar.js";
import Textform from "./textform.js";
import About from "./About.js";
import Alert from "./Alert.js";
import { Routes, Route } from "react-router-dom";


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

    <Navbar
      mode={Mode}
      toggleMode={toggleMode}
      toggleMode1={toggleMode1}
    />

    <Alert Alert={alert} />

    <div className="container my-3">

      <Routes>

        <Route
        exact  path="/"
          element={
            <Textform
              heading="Enter the Text to Analyze Below"
              showAlert={showAlert}
            />
          }
        />

        <Route
         exact path="/about"
          element={<About />}
        />

      </Routes>

    </div>

  </div>


  );
}

export default App;
