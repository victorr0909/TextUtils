import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
 import About from './components/About';
import {BrowserRouter as Router,  Switch, Route} from "react-router-dom";
// import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light') ; //whether Dark Mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message , type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode= () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#08303f';
      showAlert("Dark Mode Enabled","success");
      document.title="'TextUtils - Dark Mode Enabled!"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode Disabled","success");
      document.title="'TextUtils - Light Mode Enabled!"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
         <Switch>
            <Route exact path="/about">
              <About mode={mode} /> 
            </Route>
            <Route exact path="/"> 
              <TextForm showAlert={showAlert}  mode={mode}/> 
            </Route>
        </Switch> 
        </div>
       </Router> 
    </>
  );
}
export default App;
