"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-gpx";

interface RouteMapProps { gpxUrl: string }

const GPXLayer: React.FC<{ gpxUrl: string }> = ({ gpxUrl }) => {
  const map = useMap();

  useEffect(() => {
    if (!gpxUrl) return;

    new L.GPX(gpxUrl, {
        async: true,
        polyline_options: { color: "rgb(244, 53, 69)", weight: 4 },
      }).on("loaded", (e: L.LeafletEvent) => {
        const gpx = e.target as L.FeatureGroup;
        map.fitBounds(gpx.getBounds());
      }).addTo(map);
  }, [gpxUrl, map]);

  return null;
};


const RouteMap: React.FC<RouteMapProps> = ({ gpxUrl }) => (
  <MapContainer
    className="w-full h-96 rounded-2xl mt-6"
    center={[51.7, 5.9]}
    scrollWheelZoom={true}
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {gpxUrl && <GPXLayer gpxUrl={gpxUrl} />}
  </MapContainer>
);

export default RouteMap;
