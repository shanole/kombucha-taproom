import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <KegControl />
      </main>
    </React.Fragment>
  );
}

export default App;
