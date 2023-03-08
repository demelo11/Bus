import { ToastContainer } from 'react-toastify';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import Add from './pages/Add';

function App() {
  return (
     <BrowserRouter>
    <div className="App">
    
      <ToastContainer position='top-center'/>
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/add" element={<Add/>}/>
    <Route exact path="/update/:id" element={<Add/>}/>
    </Routes>
   
    </div>
     </BrowserRouter>
  );
}

export default App;
