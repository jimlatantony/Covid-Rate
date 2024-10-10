import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CovidMap = ({ data }) => {
  const indiaCenter = [20.5937, 78.9629];

  return (
    <div style={{ width: "100%", height: "500px", marginTop: "50px" }}>
      <MapContainer
        center={indiaCenter}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((stateData) => (
          <Marker
            key={stateData.state}
            position={[stateData.coordinates.lat, stateData.coordinates.lng]}
          >
            <Popup>
              <strong>{stateData.state}</strong>
              <br />
              Total Cases: {stateData.timeline[0].totalCases}
              <br />
              Active Cases: {stateData.timeline[0].activeCases}
              <br />
              Recovered: {stateData.timeline[0].recovered}
              <br />
              Deaths: {stateData.timeline[0].deaths}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CovidMap;
