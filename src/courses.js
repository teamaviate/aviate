import React, { Component } from 'react';
import {Card} from 'primereact/card';
import {Link} from 'react-router-dom';
class Courses extends Component{
    constructor(props) {
        super(props);
        this.state = {
                footer1Active:false,
                footer2Active:false,
                footer3Active: false
        }
    }
    showmore1(){
        var dots = document.getElementById("dots1");
        var moreText = document.getElementById("more1");
        var btnText = document.getElementById("btn1");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "View more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "View less"; 
          moreText.style.display = "inline";
        }
    }
    showmore2(){
        var dots = document.getElementById("dots2");
        var moreText = document.getElementById("more2");
        var btnText = document.getElementById("btn2");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "View more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "View less"; 
          moreText.style.display = "inline";
        }
    }
    showmore3(){
        var dots = document.getElementById("dots3");
        var moreText = document.getElementById("more3");
        var btnText = document.getElementById("btn3");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "View more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "View less"; 
          moreText.style.display = "inline";
        }
    }
    componentDidMount() {
        document.title = "Aviate Robotics | Courses ";
        window.scrollTo(0, 0)
      }
    render(){
        const headerBeginner = (
            <img alt="Card" className="courseCardImg"  src={require('./assets/beginner.JPG')}/>
        );
        // const footerBeginner = (
        //     <span>
        //         <Link to={'/register'} ><Button label="Register Here"/></Link>
        //     </span>
        // );

        const headerIntermediate = (
            <img alt="Card" className="courseCardImg" src={require('./assets/intermediate.jpg')}/>
        );
        // const footerIntermediate = (
        //     <span>
        //         <Link to={'/register'} ><Button label="Register Here"/></Link>
        //     </span>
        // );

        const headerAdvanced = (
            <img alt="Card" className="courseCardImg" src={require('./assets/advanced.jpg')}/>
        );
        // const footerAdvanced = (
        //     <span>
        //         <Link to={'/register'} ><Button label="Register Here"/></Link>
        //     </span>
        // );
        return(
            <div style={{paddingTop:10}}>
                <div className="container-fluid text-justify"><br/>
                    <h4 style={{fontStyle:"italic",textAlign:"center" }}>"Either you have to satisfy with what you have or you have to work hard for what you want"</h4><br/>
                </div>
                <div>
                    <div className="row container-fluid ml-1" >
                        <div className="col-md-4 mt-5">
                            <Card  title="Beginner level course" subTitle="Course Duration : 6 Weeks (saturday & sunday)"  className="ui-card-shadow roundBorder"   header={headerBeginner}>
                                <div className="text-justify">
                                    <strong>
                                        Starts from the basic introduction of robotics, why robotics, urge to learn programming and
                                        how to build one such bot using the Arduino from scratch covering all the mandatory beginner 
                                        level projects.<br/><br/>
                                        This Course will cover:-
                                        <span id="dots1">  </span>
                                        <span id="more1"><br/>
                                             <ul>
                                                 <li>Wide variety of sensors and Actuators</li>
                                                 <li>Arduino Programming</li>
                                                 <li>Building blocks of basic robots</li>
                                                 <li>working with Bluetooth, GSM, WiFi</li>
                                                 <li>Gesture control</li>
                                                 <li>IOT Architecture</li>
                                                 <li>Device to Cloud communication</li>
                                                 <li>Cloud to Device messaging</li>
                                                 <li>http transportation protocol</li>
                                             </ul>
                                             <div style={{color:"blue"}}>
                                                 <h6>Project work-1</h6>
                                                 <h6>Assesments-2</h6>
                                             </div>
                                            <p style={{fontSize:"24px",color:"brown"}}><b>Course fee:-Rs.<strong><span>2500/-</span></strong></b></p>
                                            <p style={{fontSize:"14px",color:"red"}}>*Register now and get two free live sessions.</p>
                                            <Link to={'/register'} ><button className="btn btn-primary btn-rounded">Register Here</button></Link><br/>
                                        </span>
                                    </strong>
                                   <button id="btn1" className="btn btn-primary btn-rounded" onClick={this.showmore1} >View More</button>                               
                                </div>
                            </Card>
                        </div>

                        <div className="col-md-4  mt-5">
                            <Card  title="Intermediate level course" subTitle="Course Duration : 6 Weeks (saturday & sunday)"  className="ui-card-shadow roundBorder"  header={headerIntermediate}>
                                <div className="text-justify">
                                    <strong>
                                        Starts from the basic introduction of raspberry pi, python programming and
                                        how to interface sensors and actuators with raspberry,building a rover, image processing and object detection.<br/><br/>
                                        This Course will cover:-
                                        <span id="dots2">  </span>
                                        <span id="more2">
                                            <ul>
                                                <li> Features of Raspberry pi</li>
                                                <li>Python Programming</li>
                                                <li> GPIO & Linux commands</li>
                                                <li>Interfacing sensors and actuators with raspberry pi</li>
                                                <li>Building a rover</li>
                                                <li>Image processing using OpenCv</li>
                                                <li>Adding Object and face detection capability to the rover</li>
                                            </ul><br/>
                                            <div style={{color:"blue"}}>
                                                 <h6>Project work-1</h6>
                                                 <h6>Assesments-3</h6>
                                             </div>
                                            <p style={{fontSize:"24px",color:"brown"}}><b>Course fee:-Rs.<strong><span>3500/-</span></strong></b></p>
                                            <p style={{fontSize:"14px",color:"red"}}>*Register now and get two free live sessions.</p>
                                            <Link to={'/register'} ><button className="btn btn-primary btn-rounded">Register Here</button></Link>
                                            <br/>
                                        </span>
                                    </strong>
                                    <button id="btn2" className="btn btn-primary btn-rounded" onClick={this.showmore2} >View More</button>
                                </div>                            
                            </Card>
                        </div>

                        <div className="col-md-4  mt-5">
                            <Card  title="Advanced level course" subTitle="Course Duration : 6 Weeks (saturday & sunday)"  className="ui-card-shadow roundBorder"  header={headerAdvanced}>
                                <div className="text-justify">
                                    <strong>
                                        Starts from the basic introduction of RC plane, quadcopter, mechanical design with solid works, flight controller, pid controller 
                                        algorithms covering all the principles and finally build an application.<br/><br/>
                                        This Course will cover:-
                                        <span id="dots3">  </span>
                                        <span id="more3">
                                            <br/>
                                            <p>Module 1: RC plane</p>
                                            <ul>
                                                <li>Introduction to Rc plane</li>
                                                <li>Bernoulli's principle, Turbulance and propellers</li>
                                                <li>Basic solid works tools</li>
                                                <li>Mechanical design</li>
                                                <li>Servo control mechanism</li>
                                                <li>Flight controller, Flight modes and calibration</li>
                                            </ul>
                                            <p>Module 2: Quadcopter</p>
                                            <ul>
                                                <li>Introduction to Quadcopter</li>
                                                <li>Bernoulli's principle</li>
                                                <li>Mechanical design</li>
                                                <li>Choosing components and calculations</li>
                                                <li>Basic solid works tools</li>
                                                <li>Flight controller working and calibration</li>
                                                <li>PID controller algorithm</li>
                                                <li>Building a real time application</li>
                                            </ul><br/>
                                            <div style={{color:"blue"}}>
                                                 <h6>Project work-2</h6>
                                                 <h6>Assesments-5</h6>
                                             </div>
                                            <p style={{fontSize:"24px",color:"brown"}}><b>Course fee:-Rs.<strong><span>10000/-</span></strong></b></p>
                                            <Link to={'/register'} ><button className="btn btn-primary btn-rounded">Register Here</button></Link><br/>
                                        </span>
                                        <button id="btn3" className="btn btn-primary btn-rounded" onClick={this.showmore3} >View More</button> 
                                    </strong>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <br/>
                    {/* <div class="row container-fluid mt-5">
                        <div class="courseCard col-md-3 ml-5">
                            <Card  title="Quadcopters" subTitle="Course Duration : 5 Weeks (saturday & sunday)"  className="ui-card-shadow" footer={footerBeginner} header={headerBeginner}>
                                <div className="text-justify">
                                    <strong>Quadcopter WORKSHOP provides cross-disciplinary students the opportunity to design, build, test, and iterate a fully functional quadcopter from scratch. This workshop is open to students across all majors and colleges here at AVIATE ROBOTICS. We deisgn this workshop circulumm as training program to teach you everything you need to know by having you build your own quadcopter on a team of 5 or 6.  
                                    </strong>
                                </div>
                            </Card>
                        </div>

                        <div class="col-md-3 ml-5">
                            <Card  title="Rc fixed wing" subTitle="Course Duration : 5 Weeks (saturday & sunday)"  className="ui-card-shadow" footer={footerIntermediate} header={headerIntermediate}>
                                <div className="text-justify">
                                    <strong>Starts from the basic introduction of robotics, why robotics, urge to learn programming and
                                    how to build one such bot using the Arduino from scratch covering all the mandatory beginner 
                                    level projects.<br/><br/>
                                    This course will build a good programming approach that will make you understand how the actual
                                    bot works and the flow of circuit. 
                                    </strong>
                                </div>
                            </Card>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Courses;