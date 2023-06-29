import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import NgoProfile from '../NGOS/NgoProfile/NgoProfile';
import { useNavigate } from 'react-router-dom';
import './NearbyNGOs.css';

export default function NearbyNGOs() {
    const history = useNavigate();
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [newData, setNewData] = useState([]);
    const [nearbyNGOs, setNearbyNGOs] = useState([]);

    const [address, setAddress] = useState('13th Floor, Building No. 3 M/S Gigaplex Estate Private Limited- IT/ITES SEZ IT Plot No. 5, Airoli Knowledge Park Rd, Airoli, Navi Mumbai, Maharashtra 400708');
    const [coordinates, setCoordinates] = useState(null);

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, [newData]);

    //console.log(newData)

    const apiKey = 'AIzaSyDdkkhjIkL0px6_OT_Sfnua74Q75NGX5xc';

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5161/api/ngo');
            const jsonData = await response.json();
            console.log(jsonData);

            jsonData.forEach(element => {
                // handleGetCoordinates(element.location);
                fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                        element.location
                    )}&key=${apiKey}`
                )
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.status === 'OK') {
                            const { lat, lng } = data.results[0].geometry.location;
                            console.log(lat, lng);
                            let temp = newData;
                            temp.push({ id: element.id, latitude: lat, longitude: lng });
                            setNewData(temp);
                            setNewData(...data, { id: element.id, latitude: lat, longitude: lng });
                            newData.push({ id: element.id, latitude: lat, longitude: lng });
                            const va = newData.map((ngo) => {
                                const distance = findDis(latitude, ngo.latitude, longitude, ngo.longitude);
                                return { id: ngo.id, distance, lat: ngo.latitude, lng: ngo.longitude };
                            }).filter(ngo => ngo.distance <= 100);

                            // console.log(newData);
                            // console.log(va);
                            // setNearbyNGOs(va);
                            // setCoordinates({ latitude: lat, longitude: lng });
                        } else {
                            throw new Error('Geocoding API request failed.');
                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error.message);
                        setCoordinates(null);
                    });
            });


            setTimeout(() => { }, 40000);
            console.log(newData);
            if (newData.length > 0) {
                const va = newData.map((ngo) => {
                    const distance = findDis(latitude, ngo.latitude, longitude, ngo.longitude);
                    return { id: ngo.id, distance, lat: ngo.latitude, lng: ngo.longitude };
                }).filter(ngo => ngo.distance <= 100); setNearbyNGOs(va);
            }
            setData(jsonData);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    if (!data) {
        return null
    }
    else {
        console.log(data);
    }

    // const NGOLocations = [
    //     { id: 1, latitude: 19.1209, longitude: 72.8921 },
    //     { id: 2, latitude: 19.1225, longitude: 72.9098 },
    //     { id: 3, latitude: 19.1230, longitude: 73.1456 }
    // ];

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


    // const nearbyNGOs = NGOLocations.map((ngo) => {
    //     const distance = findDis(latitude, ngo.latitude, longitude, ngo.longitude);
    //     return { id: ngo.id, distance, lat: ngo.latitude, lng: ngo.longitude };
    // }).filter(ngo => ngo.distance <= 50);

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

    // console.log(nearbyNGOs);

    return (
        <div className='map'>
            <LoadScript googleMapsApiKey="AIzaSyDdkkhjIkL0px6_OT_Sfnua74Q75NGX5xc">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={options.zoom}>
                    <Marker position={{ lat: latitude, lng: longitude }} />
                    {nearbyNGOs.map((ngo, index) => (
                        <Marker key={index} position={{ lat: ngo.lat, lng: ngo.lng }} onClick={() => history(`/Ngos/${ngo.id}`)} />
                    ))}
                </GoogleMap>
            </LoadScript>
        </div>
    );
}