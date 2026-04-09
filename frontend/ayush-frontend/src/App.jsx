import { useState } from 'react';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Count from './Count';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div>
        {/* <Cards name='Ayush' degree = 'phd '/>
        <br />
        <Cards name='shivam' degree='12th+' /> */}
        <Count/>
      </div>
    </>
  );
}

export default App;
