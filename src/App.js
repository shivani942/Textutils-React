import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(type,message) => {
    setAlert({
      type : type,
      msg: message
    });
    setTimeout(() =>{
      setAlert(null);
    },1000)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("success","Dark mode is on");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("success","Light mode is on");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-4">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm heading="Try Textutils - Word counter, Character counter, Remove extra spaces" showAlert={showAlert} mode={mode}/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
