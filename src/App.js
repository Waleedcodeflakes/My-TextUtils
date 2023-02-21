import logo from './logo.svg';
import './App.css';

// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
// import { Routes ,Route } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
    
    const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }

    const removeBodyClasses = () =>{
      document.body.classList.remove('bg-light')
      document.body.classList.remove('bg-dark')
      document.body.classList.remove('bg-warning')
      document.body.classList.remove('bg-success')
      document.body.classList.remove('bg-warning')
      document.body.classList.remove('bg-danger')


    }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
    // document.title = "textUtils - Dark mode";
    // setInterval(() => {
      
    // }, 2000);
    } else {
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    // document.title = "textUtils - Light mode"
    }
  }

  // This is called JSX: An html in camoflog of JavaScript
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about">
          </Route>
          
          </Route>
        </Routes> */}
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, remove extra spaces" mode={mode}/>
        <About mode={mode}/>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
