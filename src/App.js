import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
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
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode Disabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
       <TextForm showAlert={showAlert}  mode={mode}/> 
      </div>
    </>
  );
}
export default App;
