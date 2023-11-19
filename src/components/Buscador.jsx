import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const Buscador = ({ inputValue, setInputValue }) => {
  //Captura lo del input?
  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <InputGroup style={styles.container}>
      <FormControl
        type="text"
        placeholder="Ingresa el nombre"
        style={styles.input}
        onChange={handleChange}
      />
    </InputGroup>
  );
};

const styles = {
  container: {
    margin: '40px 0',
  },
  input: {
    width: '50%',
    borderRadius: '10px',
  },
};

export default Buscador;
