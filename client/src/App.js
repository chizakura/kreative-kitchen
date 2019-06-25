import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import KreativeKitchen from './KreativeKitchen_Logo.png'
import Hamburger_Menu from './Hamburger_Menu.png'



function App() {
  return (
    <div className="App">
      <div className="nav">
          <div className="Hamburger_Menu">
              <img src={Hamburger_Menu} alt = "Hamburger_Menu"/>
          </div>
      <div className="Kreative-Kitchen_Logo">
            <img src={KreativeKitchen} alt = "Kreative-Kitchen_Logo"/>
      </div>


      </div>

      <SearchBar/>


    </div>
  )
}

export default App;