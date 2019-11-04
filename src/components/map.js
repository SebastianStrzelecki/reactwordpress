import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default class MapLeaflet extends React.Component{

    componentDidMount(){
        this.map = L.map('map',{
            zoom: 11
        }).setView([52.2481333, 21.0191138], 11);

        L.tileLayer('',{
            detectRetina:true,
            maxZoom:20,
            maxNativeZoom:17,
        }).addTo(this.map);
    }
    
    

    render(){
        return <div id="map" style={{width:"100%", height:500}}></div>
    }
}