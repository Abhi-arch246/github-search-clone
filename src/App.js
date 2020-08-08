import React from 'react';
import logo from './github.png';
import './App.css';
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{marginTop:'40px',fontWeight:'1000',fontSize:'55px',wordSpacing:'10px'}}>A Explore</h1>
      </header>
      <Profile/>
    </div>
  );
}

export default App;
