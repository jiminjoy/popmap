import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {Button} from '@material-ui/core';
import credentials from "./credentials/credentials.json";

const AnyReactComponent = ({title}) => {
    return (
        <Button variant={"contained"} color={"primary"}>
            {title}
        </Button>
    )
};


export default class Maps extends Component {
    static defaultProps = {
        center: {
            lng: 126.753782,
            lat: 37.6907884
        },
        zoom: 11
    };

    state = {
        result: []
    };

    componentDidMount() {
        fetch('/api', {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
        })
            .then(res => res.json())
            .then(result => this.setState({result}))
            .catch(e => console.log(e));
    }

    render() {
        const {result} = this.state;
        console.log(Object.values(result).map(e => e.title));
        return (
            <div style={{height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: credentials.googleCloudPlatform.apiKey}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                    {result.map((e, i) => <AnyReactComponent
                        key={i}
                        title={e.title}
                        lng={e.lng}
                        lat={e.lat}
                    />)}
                </GoogleMapReact>
            </div>
        )
    }
}