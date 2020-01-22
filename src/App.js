import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import ScrollUpButton from "react-scroll-up-button";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Home from './Home';
import AboutUs from './aboutus';
import Courses from './courses';
import Schools from './Schools';
import AfterSchool from './AfterSchool';
import EnggColleges from './EnggColleges';
import Events from './events';
import Clients from './clients';
import Register from './register';
import RegSuccess from './regSuccessMessage';
import RegSuccessMessage from './regSuccessMessage';
import GetInTouchSuccessMessage from './getInTouchSuccessMessage';

class App extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      isOpen: false
    };
    this.onResize = this.onResize.bind(this);
  }

  onResize = () => {
    window.onresize = () => {
      // window.location.reload();
      //I had tried with 'this.alert(true)' too
    }
  }

  


  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentWillMount() {
    this.onResize();
}

  componentDidMount() {
    window.addEventListener("resize", () => setTimeout(() => {this.onResize()},10000));
    document.title = "Aviate Robotics | S.T.E.A.M Education";
    window.scrollTo(0, 0)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
}


  render() {
    var path = window.location.pathname;
    var navColor = "";
    var fontColor = "";
    var flag = true;
    if (path ==="/home"){
       fontColor="white";
       flag=true;
       if(window.innerWidth>="991"){
        navColor = "transparent";
        flag=true;

       }else{
        navColor = "white";
        flag=false;
        fontColor="black";
       }
    }else{
       navColor = "white";
       flag=false;
       fontColor="black";
    }
    return (
      <Router>
        <React.Fragment>
          <MDBNavbar className="aviatenav"  style={{backgroundColor:navColor}} expand="lg" >

            <MDBNavbarBrand className="aviatebrand" onClick={this.toggleCollapse}>
              <Link className="" to="/home"  >
                <img className="aviatelogo"  src={require("../src/assets/Asset 2.svg")} alt="logo" />
              </Link>
            {/* </MDBNavbarBrand>
            <MDBNavbarBrand onClick={this.toggleCollapse}> */}
              
                {flag
                ?<Link to="/home" ><img alt="title" style={{fontFamily:"arial"}} className="aviatetitle" src={require('./assets/Asset 1_1.svg')} /></Link>
                :<Link to="/home" ><img alt="title" className="aviatetitle" src={require('./assets/Asset 1_3.svg')} /></Link>
              }
                
              
            </MDBNavbarBrand>

            
            <MDBNavbarToggler className="navbar-light"  onClick={this.toggleCollapse} />
            
            <MDBCollapse className="navbarCollapse" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right className="fontnav " >
                <MDBNavLink className="itemsnav" style={{color:fontColor}} to="/home" onClick={this.toggleCollapse}>HOME</MDBNavLink>
                <MDBNavLink className="itemsnav" style={{color:fontColor}} to='/aboutus' onClick={this.toggleCollapse}>ABOUT US</MDBNavLink>
                <MDBNavLink className="itemsnav" style={{color:fontColor}} to="/courses" onClick={this.toggleCollapse}>COURSES</MDBNavLink>

                <MDBDropdown>
                  <MDBDropdownToggle className="itemsnav" style={{color:fontColor}} nav>OUR SERVICES</MDBDropdownToggle>

                  <MDBDropdownMenu  onClick={this.toggleCollapse} >
                    <MDBDropdownItem className='dropdown'>
                      <Link className="itemsnav" to="/ourservices/schools" >Robotics-Schools</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link className="itemsnav" to="/ourservices/enggcolleges" >Engineering Colleges</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link className="itemsnav" to="/ourservices/events">Events</Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>

                <MDBNavLink className="itemsnav" style={{color:fontColor}} to="/clients" onClick={this.toggleCollapse}>CLIENTS</MDBNavLink>
                <a href='#contactus'  style={{color:fontColor}} className="itemsnav nav-link">CONTACT US </a>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>


          


          
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/home" />)} />

            <Route path="/home" component={Home} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/courses" component={Courses} />
            <Route path="/ourservices/schools" component={Schools} />
            <Route path="/ourservices/enggcolleges" component={EnggColleges} />
            <Route path="/ourservices/events" component={Events} />
            <Route path="/clients" component={Clients} />
            <Route path="/afterschool/register" component={AfterSchool} />
            {/* <Route path="/ournetwork" component={OurNetwork}/> */}
            <Route path="/register" component={Register} />
            <Route path="/regsuccess" component={RegSuccess} />
            <Route path="/regsuccessmessage" component={RegSuccessMessage} />
            <Route path="/getintouchsuccessmessage" component={GetInTouchSuccessMessage} />
            {/* <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" /> */}
            <Route path="*" render={() => (<Redirect to="/home" />)} />
          </Switch>

          <ScrollUpButton  style={{marginRight:"-5vh"}}/>
          <ScrollableAnchor id={'contactus'}>
            <footer className="footer-distributed">    
              <div className="footer-left">
              <img alt="title"  width="80vh" height="80vh" src={require('./assets/Asset 2.svg')} />
                <img alt="title"  width="120vh" height="120vh" src={require('./assets/Asset 1_1.svg')} />
                <div className="col-md-12">
                    <p className="footer-company-about">
                  <span>About the company</span>
                  Aviate is a platform developed to introduce S.T.E.A.M Education with robotics from primary school level to graduate programs by integrating academics to a real world.
                </p>

                <div className="footer-icons">
                  <Link to="//www.facebook.com/TeamAviate" target="_blank">
                    <MDBIcon fab icon="facebook-f" />
                  </Link>
                  <Link to="//www.twitter.com/AviateRobotics" target="_blank">
                    <MDBIcon fab icon="twitter" />
                  </Link>
                  <Link to="//www.linkedin.com/in/aviaterobotics/" target="_blank">
                    <MDBIcon fab icon="linkedin-in" />
                  </Link>
                  <Link to="//www.instagram.com/aviate.robotics/" target="_blank">
                    <MDBIcon fab icon="instagram" />
                  </Link>
                </div>
                </div>
              </div>

              <div className="footer-center">
                <div>
                  <i className="fa fa-map-marker"></i>
                  <p><span>Pragathi Nagar, Kukatpally</span>Hyderabad, Telangana, India.  500 072</p>
                </div>

                <div>
                  <i className="fa fa-phone"></i>
                  <p><a href="tel:+91 9704704451">+91 9704704451</a></p>
                </div>

                <div>
                  <i className="fa fa-envelope"></i>
                  <p><a href="mailto:team@aviaterobotics.com">team@aviaterobotics.com</a></p>
                </div>

              </div>

              <div className="footer-right">

              <iframe className= "map" title="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15224.560758271264!2d78.424733!3d17.453003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b8c868cd2f2694a!2sAviate%20Robotics!5e0!3m2!1sen!2sin!4v1575789826675!5m2!1sen!2sin"  frameBorder="0"  allowFullScreen=""></iframe>               

              </div>

              <div className="text-center footer-company-name">Aviate Robotics &copy; 2019</div>
              <div className="text-center footer-company-name">Developed by TEAM AVIATE ROBOTICS</div>
            </footer>
          </ScrollableAnchor>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
