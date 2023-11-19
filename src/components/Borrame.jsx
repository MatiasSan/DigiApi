import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Nuevo estado para los datos filtrados

  const updateData = (newData) => {
    setData(newData);
  };

  const updateFilteredData = (filteredResults) => {
    setFilteredData(filteredResults);
  };

  return (
    <>
      <Header />
      <Buscador
        inputValue={inputValue}
        setInputValue={setInputValue}
        data={data}
        updateFilteredData={updateFilteredData} // Pasamos la función de actualización de datos filtrados
      />
      {filteredData.length > 0 ? ( // Verificamos si hay datos filtrados antes de renderizar MiApi
        <MiApi data={filteredData} />
      ) : (
        <MiApi data={data} />
      )}
      <Footer />
    </>
  );
}

export default App;
