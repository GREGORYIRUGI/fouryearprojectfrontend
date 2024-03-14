import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Credit from './components/Credit'
import Home from './components/Home'

import { Link, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import { useNavigate,Navigate } from 'react-router-dom';
import PassC from './components/PassC';

function App() {
  return (
    <div className="App">
      <div className='Header'>
  
     <nav className='Header'>
      <Link to='/' className='navItem'>Homepage</Link>
      <Link to='about-me' className='navItem'>About</Link>
      <Link to='credit' className='navItem'>Credit</Link>
      {/* <Link to='register' className='navItem'>Register</Link> */}
    
     </nav>
     </div>

    <Routes>
    <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />
    <Route path='/login' element={<Login/> }/>
    <Route path='/login1' element={<PassC/> }/>
    <Route path='/home' element={<Home/> }/>
    <Route path='/about-me'element={<About />} />
    <Route path='/credit'element={<Credit />} />
    <Route path='/register' element= {<Register/>} />
    </Routes>
    
    
    </div>
  );
}

export default App;
