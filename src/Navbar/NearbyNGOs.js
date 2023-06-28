import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

export default function NearbyNGOs() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const NGOLocations = [
        { id: 1, latitude: 19.1209, longitude: 72.8921 },
        { id: 2, latitude: 34.0522, longitude: -118.2437 },
        { id: 3, latitude: 37.7749, longitude: -122.4194 }
    ];

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            },
            (error) => {
                console.error('Error retrieving location:', error);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }

    const findDis = (lat1, lat2, lon1, lon2) => {
        lon1 = lon1 * Math.PI / 180;
        lon2 = lon2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;

        // Haversine formula
        const dlon = lon2 - lon1;
        const dlat = lat2 - lat1;
        const a = Math.pow(Math.sin(dlat / 2), 2)
            + Math.cos(lat1) * Math.cos(lat2)
            * Math.pow(Math.sin(dlon / 2), 2);

        const c = 2 * Math.asin(Math.sqrt(a));

        // Radius of earth in kilometers. Use 3956 for miles
        const r = 6371;

        return (c * r);
    };


    const nearbyNGOs = NGOLocations.map((ngo) => {
        const distance = findDis(latitude, ngo.latitude, longitude, ngo.longitude);
        return { id: ngo.id, distance, lat: ngo.latitude, lng: ngo.longitude };
    }).filter(ngo => ngo.distance <= 50);

    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const center = {
        lat: latitude,
        lng: longitude
    };

    const options = {
        zoom: 10,
        center: center
    };

    console.log({latitude, longitude});

    return (
        <LoadScript googleMapsApiKey="AIzaSyDdkkhjIkL0px6_OT_Sfnua74Q75NGX5xc">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={options.zoom}>
                <Marker position={{lat: latitude, lng: longitude}} />
                {nearbyNGOs.map((ngo, index) => (
                    <Marker key={index} position={{lat: ngo.lat, lng: ngo.lng}} onClick={() => console.log("working")} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
}