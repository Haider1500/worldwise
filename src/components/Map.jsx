import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
const position = [20, 60];

export function Map() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 text-black" onClick={() => navigate("form")}>
      <MapContainer
        className="h-96"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
