import React from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <div className="h-screen w-screen bg-black font-sans">
      <Header />
      <Card img="https://ipfs.thirdweb.com/ipfs/bafkreigehmswocff4fwv4ktbvs7bfj2eliledu2ofegi664fxraaowzjwq" title="Test" price="2" id={1} />
    </div>
  );
}

export default App;
