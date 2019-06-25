import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import KreativeKitchen from './KreativeKitchen_Logo.png'


function App() {
  return (
    <div className="App">
      <div className="nav">
          <div className="Kreative-Kitchen_Logo">
            <img src={KreativeKitchen} alt = "Kreative-Kitchen_Logo"/>
          </div>
    </div>
      <SearchBar/>
    </div>
  )
}

export default App;