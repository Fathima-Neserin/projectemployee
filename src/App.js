import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Employee from './components/Employee';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/emp' element={<Employee/>} />
    </Routes>
    
    </>
  );
}

export default App;
