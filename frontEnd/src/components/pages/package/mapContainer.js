import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Geocode from "react-geocode";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
    width: '50%',
    height: '50%',
};

class MapContainer extends Component{

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    geocode(){
        Geocode.setApiKey("AIzaSyAz4PVdx3hTOcG5zpaD1ymBvBlxu6cDKok");
        Geocode.setLanguage("en");
        Geocode.fromAddress("Cairo, Egypt").then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              console.table(lat,lng);
            },
            (error) => {
              console.error(error);
            }
          );
    }

    render() {
        this.geocode()
        return (
            <Map
              google={this.props.google}
              zoom={5}
              style={mapStyles}
              initialCenter={{ lat: 30.8025, lng: 26.8206}}
            >
            <Marker position={{ lat: 30.033333, lng: 31.233334}} />
            </Map>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAz4PVdx3hTOcG5zpaD1ymBvBlxu6cDKok'
})(MapContainer);