import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">     
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </div>
  );
}

export default App;
