import React from 'react';
import {MapContainer, TileLayer, Marker, useMapEvents} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
    iconUrl: '/images/marker.png',
    iconRetinaUrl: '/images/marker.png',
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
});

const Map = ({setLocation, location, justView = false, height, zoom}) => {
    const MapClickHandler = () => {
        useMapEvents({
            click: (e) => {
                if (!justView) {
                    const {lat, lng} = e.latlng;
                    setLocation(prev => ({...prev, latitude: lat, longitude: lng}));
                }
            },
        });
        return null;
    };

    return (
        <MapContainer center={location} zoom={zoom || 6} style={{height: height ?? '400px', width: '100%'}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapClickHandler/>
            <Marker position={location} icon={customIcon}/>
        </MapContainer>
    );
};

export default Map;
