import React, { Component } from 'react';
class Clients extends Component{
    componentDidMount() {
        document.title = "Aviate Robotics | Clients";
        window.scrollTo(0, 0)
      }
    render(){
        return(
            <div>
                <div className="container-fluid text-justify"><br/><br/>
                    <h4 style={{fontStyle:"italic",textAlign:"center",width:"100%" }}>"Winners don't do different things, they do things differently"</h4>
                </div>
                <div className="row" style={{marginLeft:20,marginTop:80,marginBottom:80}}>
                    <div className="col-md-2">
                        <img className="img-fluid" style={{ height:200, width:200}} src={require("./assets/vnr.png")} alt="logo" />
                        <h4 style={{marginTop:10}}>VNR Vignana Jyothi Institute of Engineering & Technology</h4>
                    </div>
                    <div className="col-md-2">
                        <img className="img-fluid" style={{ height:200, width:200}} src={require("./assets/rishi.png")} alt="logo" />
                        <h4 style={{marginTop:10}}>Rishi M.S Institute of Engineering & Technology for Women</h4>
                    </div>
                    <div className="col-md-2">
                        <img className="img-fluid" style={{ height:200, width:200}} src={require("./assets/munchkins.jpg")} alt="logo" />
                        <h4 style={{marginTop:10}}>Munchkins School of Excellence</h4>
                    </div>
                    <div className="col-md-2">
                        <img className="img-fluid" style={{ height:200, width:200}} src={require("./assets/littleElly.png")} alt="logo" />
                        <h4 style={{marginTop:10}}>Little Elly School</h4>
                    </div>
                    <div className="col-md-2">
                        <img className="img-fluid" style={{ height:200, width:200}} src={require("./assets/aadarsh.jpg")} alt="logo" />
                        <h4 style={{marginTop:10}}>Aadarsh public School</h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default Clients;