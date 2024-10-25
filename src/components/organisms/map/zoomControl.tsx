import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from 'leaflet';

const ZoomControl: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    const zoomControl = L.control.zoom({ position: "bottomright" }).addTo(map);
    
    return () => {
      map.removeControl(zoomControl);
    };
  }, [map]);

  return null;
};

export default ZoomControl