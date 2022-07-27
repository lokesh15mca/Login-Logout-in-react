import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Profilepage from './components/Profilepage';
import { Route, Link, Routes } from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/profile" element={<Profilepage />}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
