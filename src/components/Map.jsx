// import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
const position = [40, 0];

export function Map() {
  // const navigate = useNavigate();

  return (
    <div className="flex flex-1 text-black relative">
      <MapContainer
        className="h-full w-full"
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          ``
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
