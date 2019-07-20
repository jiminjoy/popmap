import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {Button} from '@material-ui/core';
const credentail = require("./credentials/credentials.json");
const data = require('./data.json'); // forward slashes will depend on the file location

// import credentials from './credentials/credentials';


const AnyReactComponent = ({title}) => {
    return (
        <Button>
            {title}
        </Button>
    )
};

const handleApiLoaded = (map, maps) => {
    // use map and maps objects
};

    function getComponent() {


    }
//
// for(var i = 0; i < data.length; i++) {
//     var obj = data[i];
//     var name = obj[1];
//     var location = obj[2];
//
//     console.log("Name: " + name + ", " + location);
// }

export default class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lng: 126.753782,
            lat: 37.6907884
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: credentail.googleCloudPlatform.apiKey}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                    {data.map(e => <AnyReactComponent
                        key={e[1]}
                        lat={e[2][1]}
                        lng={e[2][0]}
                        title={e[1]}>
                    </AnyReactComponent>)}
                </GoogleMapReact>
            </div>
        )
    }
}