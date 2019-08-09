import React from 'react';
import './App.css';
import AmjadNavbar from './Header';
import Footer from './Footer';
import ColdMenu from './ColdMenu';
import HotMenu from './HotMenu';


function App() {
  return (
    <div>
      <AmjadNavbar></AmjadNavbar>
      <ColdMenu></ColdMenu>
      <HotMenu></HotMenu>
      <Footer></Footer>
    </div>
  );
}

export default App;
