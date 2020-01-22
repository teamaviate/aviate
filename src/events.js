import React, { Component } from 'react';
import {Fieldset} from 'primereact/fieldset';
class Events extends Component{
    componentDidMount() {
        document.title = "Aviate Robotics | Events";
        window.scrollTo(0, 0)
      }
    render(){
        return(
            <div className="eventpage">
                <div className="content-section implementation" style={{padding:30}}>
                    <h4 style={{fontStyle:"italic",textAlign:"center",color:"black"}}>"Strive for progress, not for perfection"</h4>
                </div>
                <div className="row">
                    <div className="content-section implementation col-md-5" style={{marginBottom:30,marginLeft:80}}>
                        <Fieldset legend="Science Fair" style={{backgroundColor: "rgb(230, 230, 230)"}}>
                            <h5 style={{color:"blue"}}>We dont have any science fair events right now.</h5>
                        </Fieldset>
                    </div>
                    <div className="content-section implementation col-md-5" style={{marginBottom:30,marginLeft:80}}>
                        <Fieldset legend="Drone Racing" style={{backgroundColor: "rgb(230, 230, 230)"}}>
                            <h5 style={{color:"blue"}}>Racing coming soon</h5>
                        </Fieldset>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events;