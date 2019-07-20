import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {Button} from '@material-ui/core';

import credentials from './credentials/credentials';

const AnyReactComponent = ({text}) => <Button variant={"contained"} color={"primary"}>{text}</Button>;

const handleApiLoaded = (map, maps) => {
    // use map and maps objects
};

export default class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    // bootstrapURLKeys={{key: credentials.googleCloudPlatform.apiKey}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}>
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        )
    }
}