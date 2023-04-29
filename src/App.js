import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('dark') ; //whether Dark Mode is enabled or not
  return (
    <>
      <Navbar tile="TextUtils" mode={mode}/>
      <div className="container my-3">
       <TextForm/> 
      <About/>
      </div>
    </>
  );
}
export default App;
