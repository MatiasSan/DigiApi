import React from 'react';
import { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Buscador = ({ inputValue, setInputValue, data }) => {
  const [lista, setLista] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    const result = data.filter((digimon) =>
      digimon.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setLista(result || []);

    console.log(lista);
  };

  return (
    <div>
      <InputGroup style={styles.container}>
        <FormControl
          type="text"
          placeholder="Ingresa el nombre"
          style={styles.input}
          onChange={handleChange}
        />
      </InputGroup>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {lista.map((digimon) => (
          <Card
            key={digimon.name}
            style={{ width: '22%', marginBottom: '80px' }}
          >
            <Card.Img variant="top" src={digimon.img} alt={digimon.name} />
            <Card.Body>
              <Card.Title>{digimon.name}</Card.Title>
              <Card.Text>
                <strong>Level:</strong> {digimon.level}
              </Card.Text>
              {/* Agrega más información según sea necesario */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
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
