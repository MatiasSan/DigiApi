// App.jsx
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';

function App() {
  const [data, setData] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <>
      <Header />
      <Buscador inputValue={inputValue} setInputValue={setInputValue} />
      <MiApi updateData={updateData} setData={setData} data={data} />
      <Footer />
    </>
  );
}

export default App;
