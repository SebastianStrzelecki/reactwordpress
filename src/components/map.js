import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default class Map extends React.Component{

    componentDidUpdate(){
        this.map = L.map('map',{
            center:[58,16],
            zoom: 6
        })
        L.tileLayer('',{
            detectRetina:true,
            maxZoom:20,
            maxNativeZoom:17,
        }).addTo(this.map);
    }
    
    

    render(){
        return <div id="map" style={{width:500, height:500}}>sf</div>
    }
}