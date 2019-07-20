import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {Button} from '@material-ui/core';
import credentials from "./credentials/credentials.json";
import data from "./data.json"; // forward slashes will depend on the file location


const AnyReactComponent = ({title}) => {
    return (
        <Button variant={"contained"} color={"primary"}>
            {title}
        </Button>
    )
};


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
                    bootstrapURLKeys={{key: credentials.googleCloudPlatform.apiKey}}
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