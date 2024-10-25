import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, FeatureGroup } from 'react-leaflet';
import { Feature, Geometry } from 'geojson';
import L, { Circle, Polygon, Polyline } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import Toggle from '@/components/organisms/map/toggle';
import ZoomControl from '@/components/organisms/map/zoomControl';
import MarkerDialogContent from './markerInformation';
import { Dialog } from '@/components/ui/dialog';
import { EditControl } from 'react-leaflet-draw';

interface GeoJsonProperties {
  title?: string;
  description?: string;
}

type GeoJsonFeature = Feature<Geometry, GeoJsonProperties>;

interface DrawnShape {
  type: string;
  latlngs: L.LatLngExpression[] | L.LatLngExpression[] | [L.LatLngExpression, number];
}

const Map: React.FC = () => {
  const [geoJsonData, setGeoJsonData] = useState<GeoJsonFeature | null>(null);
  const [layerVisible, setLayerVisible] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<GeoJsonProperties | null>(null);

  // Handler for when a shape is created
  const onShapeCreated = (e: { layerType: string; layer: L.Layer }) => {
    const { layerType, layer } = e;

    let shapeData: DrawnShape | null = null;

    if (layer instanceof Polygon || layer instanceof Polyline) {
      shapeData = {
        type: layerType,
        latlngs: layer.getLatLngs() as L.LatLngExpression[], // For Polygons and Polylines
      };
    } else if (layer instanceof Circle) {
      shapeData = {
        type: layerType,
        latlngs: [layer.getLatLng(), layer.getRadius()], // For Circles: [center, radius]
      };
    }

    if (!shapeData) {
      console.warn('Layer type does not support getting latlngs:', layerType);
    }
  };

  useEffect(() => {
    // Fetch mock GeoJSON data
    fetch('/json/geojson.json')
      .then((response) => response.json())
      .then((data) => setGeoJsonData(data));
  }, []);

  const onEachFeature = (feature: GeoJsonFeature, layer: L.Layer) => {
    const { title, description } = feature.properties || {};

    layer.on('click', () => {
      setSelectedFeature({ title, description });
      setDialogOpen(true);
    });
  };

  return (
    <div className='h-screen'>
      <MapContainer 
        center={[-6.9, 107.5]} 
        zoom={10}
        zoomControl={false}
        scrollWheelZoom={false} 
        className='w-full h-full'
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />

        {/* Feature Group to manage the drawn items */}
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={onShapeCreated}
            draw={{
              rectangle: true,
              polyline: true,
              circle: true,
              polygon: true,
              marker: false,
            }}
          />
        </FeatureGroup>

        {layerVisible && geoJsonData && (
          <GeoJSON data={geoJsonData} onEachFeature={onEachFeature} />
        )}

        <ZoomControl />
      </MapContainer>

      {/* Toggle to show and hide marker */}
      <Toggle toggleLayer={() => setLayerVisible((prev) => !prev)} layerVisible={layerVisible} />

      {/* Dialog for displaying marker information */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        {selectedFeature && (
          <MarkerDialogContent title={selectedFeature.title ?? ''} description={selectedFeature.description ?? ''} />
        )}
      </Dialog>
    </div>
  );
};

export default Map;
