import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Link} from 'react-router-dom';
import {GMap} from 'primereact/gmap';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {Growl} from 'primereact/growl';

class OurNetwork extends Component{
    // componentDidMount() {
    //     window.scrollTo(0, 0)
    //   }


    render(){
        
        return(
            <div>
                <div class=" offset-md-6" style={{width:500}}>
                <Map  google={this.props.google} zoom={0}>
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                </Map>
                </div>
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCRUf1qBak1kF9hxw505XTsdywRGbFfz8E")
  })(OurNetwork)