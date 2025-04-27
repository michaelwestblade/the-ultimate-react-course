import styles from './Map.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { useEffect, useState } from 'react';
import { LatLngExpression } from 'leaflet';
import { useCities } from '../contexts/CitiesContext.tsx';

export default function Map() {
  const [searchParams] = useSearchParams();
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState<LatLngExpression>({
    lat: 51.505,
    lng: -0.09,
  });

  const lat = parseFloat(searchParams.get('lat') || '51.505');
  const lng = parseFloat(searchParams.get('lng') || '-0.09');

  useEffect(() => {
    setMapPosition({
      lat,
      lng,
    });
  }, [lat, lng]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={{ lat: lat, lng: lng }}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker key={city.id} position={city.position}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }: { position: LatLngExpression }) {
  const map = useMap();
  map.setView(position, 6);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click(e) {
      navigate('form?lat=' + e.latlng.lat + '&lng=' + e.latlng.lng);
    },
  });
  return null;
}
