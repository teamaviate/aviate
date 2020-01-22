import React, { Component } from 'react';
import {Card} from 'primereact/card';
import './enggcolleges.css';

class EnggColleges extends Component{
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

    componentDidMount() {
        document.title = "Aviate Rbotics | Engineering Colleges";
        window.scrollTo(0, 0)
      }
      
    render(){
        // const header = (
        //     <img alt="Card" src={require('./assets/usercard.png')}/>
        // );
        return(
            <div>
                <div className="content-section implementation engg_1" >
                    <h4 className="engg_1_1">"It is simply a matter of cause and effect"</h4>
                    <h1 className="engg_1_2">Robotics workshops at Engineering colleges</h1>
                    <p className="engg_1_3"></p>
                    <h4 className="engg_1_2">Aviate Robotics offers workshops on Robotics and Internet of Things (IoT) to engineering and technology students.</h4>
                    

                    <div className="row">
                        <div className="col-md-4 offset-md-1">
                          <img alt="robot"  className="engg_1_4" src={require('./assets/Robot_3.png')}/>
                        </div>
                        <div className="col-md-6">
                            <h5 className="engg_1_5 ">Workshops for ECE, EEE, EIE, CSE, IT in Hyderabad</h5>
                            <h5 className="text-justify">We organize workshops on Robotics and IoT across various colleges in the city.The topics offered are such that they are beneficial to who so ever is attending the workshop to gain awareness in the existing technology and choose their carrier in the field of their interest. We have our own way of pragmatic approach in the way we deliver our lectures which helps the students understand the concepts better. </h5>
                        </div>
                    </div>
                </div>
                <div className="row enggbg">    
                    <div className="col-md-7">
                        <h4>Learning robotics is easier with the community and all the projects around it</h4>
                        <p className="text-justify">Introducing robotics technology to students is not really hard. You can easily start to learn robotics with Arduino, a great open source electronics platform used in many DIY robotics projects. For more complex projects, or if you want to learn computer science, you can use Raspberry Pi, another open source project supported by the Raspberry Pi Foundation to bring accessible technology education to everyone in the world.</p>

                        <h4>Robotics converges many different fields</h4>
                        <p  className="text-justify">Robotics is a vast and huge domain, which relies on many subdomains, such as mechanics, electronics, and computer science.Students from different major can work together on one robotics system, which will motivate them, and let them get more knowledge about their major, and other’s major.</p>
                    
                        <h4>Learn by doing, with accessible robots</h4>
                        <p className="text-justify"> Most engineering students, or students who are interested in engineering, are often asking the question : “But what does an engineer really do ?”. This question is really quite hard to answer, and many times students will know the answer when they start working.</p>
                        <p className="text-justify">By bringing robotics projects in high schools and universities, students will have the chance to get some answers to that question. They will :</p>
                        <ul>
                            <li>Work on a real physical system, like the ones you find in industry</li>
                            <li>Participate in robotics events</li>
                            <li>Work in bigger teams with a lot of different profiles</li>
                            <li>Learn valuable skills for real world jobs waiting for them</li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <h4>Our services for Engineering colleges:</h4>
                        <div className=" col-md-12" >
                            <Card title="Workshops" subTitle="Make your hands dirty" style={{padding:30,backgroundColor: "white"}} className="ui-card-shadow">
                                <div><br/><br/>
                                    <h6 >This is a platform to all the students to experience a wide range of competetions and learn from many different master minds.</h6><br/>
                                    <span id="dots1">  </span><span id="more1">
                                        <ol>
                                            <li><h6>Gesture Controlled workshop</h6></li>
                                            <li><h6>Arduino fundamental workshop</h6></li>
                                            <li><h6>Raspberry Pi - Rover workshop</h6></li>
                                            <li><h6>IOT workshop</h6></li>
                                            <li><h6>Quadcopter workshop</h6></li>
                                            <li><h6>Rc-fixed wing workshop and many more.</h6></li>
                                        </ol>
                                    </span>
                                    <button id="btn1" className="btn btn-primary btn-rounded" onClick={this.showmore1} >View More</button>
                                </div>
                            </Card>
                            <div className="engg_3_6">
                                        <a href="mailto:team@aviaterobotics.com" >
                                        <button className=" engg_4_4_1 btn btn-primary btn-rounded text-center">Please Mail us for further details</button></a>
                                    </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default EnggColleges;