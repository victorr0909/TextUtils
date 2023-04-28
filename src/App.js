import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar/>
      <div className="container my-3">
      <TextForm/>
      <About/>
      </div>
    </>
  );
}
export default App;
