import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type )=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  };

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#213e7c';
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextChanger - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextChanger is great';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextChanger';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextChanger - Light Mode";
    }
  }
  const toggleRedMode = ()=>{
    if(mode === 'light'){
      setMode('Red');
      document.body.style.backgroundColor = 'Red';
      showAlert("Red mode has been Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextChanger" aboutText="About TextChanger" mode={mode} toggleMode={toggleMode} toggleRedMode={toggleRedMode}/>
    <Alert alert = {alert}/>
    {/* <Navbar/> */}
    <div className='container my-3'>
    <TextFrom showAlert={showAlert} heading="Enter the text for change" mode={mode}/>
    {/* <About/> */}
    {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextFrom showAlert={showAlert} heading="Enter the text for change" mode={mode}/>
          </Route>
      </Switch> */}
      {/* <Routes>
        <Route exact path="/" element={ <TextFrom showAlert={showAlert} heading="Enter the text for change" mode={mode}/> } />
        <Route exact path="about" element={ <About/> } />
      </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
