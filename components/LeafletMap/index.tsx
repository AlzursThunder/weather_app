"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"

const LeafletMap: React.FC<LeafletMapProps> = ({ coords, }) => {
	const { lat, lon } = coords;
	const url = `https://tile.openstreetmap.org/{z}/{x}/{y}.png`;
	// const customLayer = tileLayer(url, {
	// 	maxZoom: 19,
	// 	attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	// 	language: 'en'

	// })
	return (
		<MapContainer
			className="h-[300px] md:h-[400px] w-full"
			center={[lat, lon]}
			zoom={16}
			scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url={url}
				maxZoom={19}
			/>
			<Marker position={[lat, lon]} icon={new Icon({ iconUrl: markerIconPng.src, iconSize: [25, 41], iconAnchor: [12, 41] })}>
				<Popup>
					Your location
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default LeafletMap;
