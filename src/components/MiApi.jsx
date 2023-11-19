// MiApi.jsx
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const MiApi = ({ updateData, data, setData }) => {
  /* const [data, setData] = useState([]); */
  const url = 'https://digimon-api.vercel.app/api/digimon';

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Hubo un error en la API');
      }
      const jsonData = await response.json();
      setData(jsonData);
      // Actualiza el estado en App.jsx usando la función pasada como prop
      updateData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [updateData]);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      {data.map((digimon) => (
        <Card key={digimon.name} style={{ width: '22%', marginBottom: '80px' }}>
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
  );
};

export default MiApi;
