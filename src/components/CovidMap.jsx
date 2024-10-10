// src/components/CovidMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const CovidMap = ({ data }) => {
  const position = [20.5937, 78.9629]; // Center of India

  return (
    <MapContainer center={position} zoom={5} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((stateData) => (
        <Marker key={stateData.state} position={[stateData.latitude, stateData.longitude]}>
          <Popup>
            <strong>{stateData.state}</strong> <br />
            Active Cases: {stateData.activeCases}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CovidMap;
