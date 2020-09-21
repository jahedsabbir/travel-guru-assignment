import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class Maps extends Component{
    render(){

    return (
        <div>
            <Map  google={this.props.google} zoom={14}>
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>                 
                </InfoWindow>
                </Map>
        </div>
    );
}
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAoAthCYWBk11v1PnjVi_57nu5xfcXOqBQ")
  })(Maps);