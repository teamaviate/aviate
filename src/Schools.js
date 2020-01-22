import React, { Component } from 'react';
import './schools.css';
import {Card} from 'primereact/card';
import {Link} from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
class Schools extends Component{
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
        document.title = "Aviate Robotics |  STEM at Schools";
        window.scrollTo(0, 0)
      }
    render(){
        const header = (
            <img alt="Card" src={require('./assets/usercard.png')}/>
        );
        
        return(
            <div>
                <div className="school_1">
                    <h4 className="school_1_1">"To achieve something you have never achieved before, 
                        you must do something you have never done before"</h4>
                    <h1 className="school_1_2">Robotics classes at schools</h1>
                    <h4 className="school_1_2">Aviate Robotics is a very successful company in training Robotics to School students 
                        through S.T.E.A.M education as we are very strong in our Syllabus with our own text book and our way of teaching.</h4>
                    <div className="row">
                        <div className="col-md-4">
                          <img alt="robot"  className="school_1_4" src={require('./assets/Robot_1.png')}/>
                        </div>
                        <div className="col-md-7">
                            <h5 className="school_1_5">S.T.E.A.M education begins with the methodology of approaching to a challenge for 
                                little minds to solve it using learning resources such as mechanical parts, electronic components, articrafts and 
                                fasteners, which are aided by computer tools to generate programmable prototypes to meet the reuirement that solves the 
                                problem raised in the challenge. The step by step process of research, design and implementation of the project 
                                enriches the learning process of the student.</h5>
                            <div className="school_1_6">
                                <a  href="#schools" className="btn btn-success school_1_7">Take a tour at our services</a>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="row school_2">
                    <div className=" school_2_1 col-md-6">
                        <div>
                            <h5><strong>Our game play to the future problem solving</strong></h5>
                            <p  className="text-justify"> Every student is assigned a project for which we will give the necessary components or kit and ask them to do what if they can without any prior instructions through which we will develop the creativity in them and then we will make them build certain basic projects under a proper guidelines and are taken to the advanced level of learning robotics.</p>                    
                        </div>
                        <div>
                            <h5><strong>Why Aviate-Robotics?</strong></h5>
                            <p  className="text-justify">Teaching robotics is extremely hard than teaching mathematics and physics. Ofcourse mathematics and physics are the basics to get into robotics. We just dont teach robotics instead we will relate the robotics to the mathematics and physics through which the students get double benefited through the hands on experience which will make them understand the mathematics as well as physics like they never thought of them as if they were that easy. This will certainly develop the logical thinking and the programmers in them.</p>
                        </div>
                        <div>
                            <h5><strong>Robotics after school</strong></h5>
                            <p  className="text-justify"> In the current automated world, the education system managed to change the method of learning as well as teaching. Teaching robotics to students in their academics can induce their ability to be creative and innovative thinkers and more productive members of society. Many governments have already recognized the importance of robotics in the classroom and have begun to create programs and laws that would incorporate it into their public education system. By teaching our students the basics of robotics, we can open a whole new world to them and exciting opportunities that they wouldn’t have access to otherwise.</p><br/><br/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img alt="robot"  className="school_2_2" src={require('./assets/beginner1.jpg')}/>
                    </div>
                </div>
                
                <div className="row school_3">
                    <div className="school_3_1 col-md-7">
                        <h1 className="school_3_2">Once we tied up with the school</h1>
                        <ul>
                            <li>
                               <h6>We provide all the necessary Robotic equipment.</h6> 
                            </li>
                            <li>
                                <h6>We provide our own text book.</h6>                            
                            </li>
                            <li>
                                <h6>We provide trainers </h6>                            
                            </li>
                            <li>
                                <h6>We regularly review the student's learning through our assesments</h6>                            
                            </li>
                            <li>
                                <h6>If the School is happy (a sure statement), we tie-up for further year.</h6>
                            </li>
                            <li>
                                <h6>Upgrade all the Robotic Materials for the further year.</h6>
                            </li>
                            <li>
                                <h6>Provide new Syllabus, provide books, handle classes and the process continues...</h6>
                            </li>
                        </ul>
                        <h1 className="school_3_2">What we expect from school</h1>
                        <ul>
                            <li>
                                <h6>Space, Tables and Chairs</h6>
                            </li>
                            <li>
                                <h6>Time slots / periods to handle classes. Need one period for a class in a week</h6>
                            </li>
                            <li>
                                <h6>Computers to program the Robots.</h6>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-5 school_3_3">
                        <h1 className="school_3_4">Dear school management,</h1>
                        <h2 className="school_3_4">Would you like to make your students learn robotics through S.T.E.A.M education in your school ?</h2>
                        <h4 className="school_3_5">We are happy to join with you to teach S.T.E.A.M education in your school.</h4>
                        <div className="school_3_6">
                            <a href="mailto:team@aviaterobotics.com" >
                            <button className=" school_4_4_1 btn btn-primary btn-rounded text-center">Please Mail us for further details</button></a>
                        </div>
                    </div>
                </div>
                <div className="row school_4">
                    <div className="col-md-5 school_4_2" >
                        <h2 className="school_4_3">Dear Parents</h2>
                        <h3 className="school_4_3">Interested in after school robotics program?</h3>
                        <h3 className="school_4_3">Currently after school robotics program is being conducted in hyderabad.</h3>
                        <h3 className="school_4_3"> Do register below to join your children in the best ever after school program with Aviate Robtoics.</h3>
                        <div className="school_4_4">
                            <Link to={'/afterschool/register'} ><button className=" school_4_4_1 btn btn-primary btn-rounded text-center">Register Here for after school program</button></Link><br/>
                        </div>
                    </div>
                    <div className="col-md-7  school_4_5">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <img alt="robot"  className="school_4_6" src={require('./assets/steam1.jpeg')}/>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <img alt="robot"  className="school_4_7" src={require('./assets/steam2.JPG')}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <img alt="robot"  className="school_4_6" src={require('./assets/steam3.jpg')}/>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <img alt="robot"  className="school_4_7" src={require('./assets/steam4.JPG')}/>
                            </div>
                        </div>
                    </div>
                </div>

                <ScrollableAnchor id={"schools"}>
                <div className="school_5">
                    <h1 className="school_5_1"><strong>Our services for schools</strong></h1>
                    <div className="row school_5_2">
                        <div className=" col-md-4 col-xs-12 content-section implementation" >
                            <Card title="Robotics curriculum" subTitle="Problem solving is as easy as 1,2,3." className="ui-card-shadow school_5_3"  header={header}>
                            <div className="text-justify" >
                                <h6 className="school_5_4">All the students from grade III to grade X will learn robotics as an academic curriculum in their school which parallely encourages them to learn basic academic concepts that are integrated with real-world lessons as students apply science, math, technology, art and engineering to them can onboard into our after school program.</h6>
                                <span id="dots1">  </span><span id="more1"><br/>
                                    <ol>
                                        <li><h6>This is a complete 3 months course organized at a school after academics.</h6></li>
                                        <li><h6>This programe is organized to unleash the potential of each and every kid.</h6></li>
                                    </ol>
                                    <h6 style={{fontStyle:"italic"}}>"what do steve jobs,sergen Brin,etc,., have common in thier educational background?
                                    they didnt go to ivy leagne universities,But they all went to summercamps techn-activities,
                                    robotics clubs and participated in them when they wer kids"</h6><br/>
                                    <ol>
                                        <li><h6>This course will create every child a clear path to achieve thier dreams.</h6></li>
                                        <li><h6>In this course students /kids create thier own robotic invention from scratch.</h6></li>
                                        <li><h6>Reaching out every students thoughts and planing to execute is our main motto.</h6></li>
                                    </ol>
                                    <h5>WOW FACTORS:</h5>
                                    <h6>students will learn:</h6>
                                    <ol>
                                        <li><h6>21st century skills</h6></li>
                                        <li><h6>technical skills</h6></li>
                                        <li><h6>team work</h6></li>
                                        <li><h6>social skills</h6></li>
                                        <li><h6>problem solving</h6></li>
                                        <li><h6>never give up attitude.</h6></li>
                                    </ol>

                                    <h5>Is your school ready for our after school ROBOTICS?</h5>
                                    <h6>"2 hours a week-3 months"</h6>
                                </span>
                                <button id="btn1" className="btn btn-primary btn-rounded" onClick={this.showmore1} >View More</button>
                            </div>
                        </Card>
                    </div>
                    <div className=" col-md-4 content-section implementation">
                        <Card title="Summer Camp" subTitle='"A little robot with a lot of possibilities"' className="school_5_3 ui-card-shadow"  header={header}>
                            <div>
                            <h6 className="school_5_4">This provides a short term courses for kids between 10-15 years old in selected public and private schools. This will be a continuous 20 days course excluding sundays for a duration of  about 3 hours per day. Students are taught visual programming to ehance their logical skills and are provided with kit content  </h6>
                            <span id="dots2">  </span><span id="more2">
                                <ol>
                                    <li><h6>Kids are taught on various domains to meet their imaginations.</h6></li>
                                    <li><h6>This makes students aware of the minimals and latest tech.</h6></li>
                                    <li><h6>This course will mainly focus on team work,imagination and problem solving skills.</h6></li>
                                    <li><h6>Robotic games like soccer will be held after a qualitative weekly training class.</h6></li>
                                </ol>
                                <div><Link to='/summercampreg'  >  Contact us to organise a summercamp</Link></div>            
                            </span>
                            <button id="btn2" className="btn btn-primary btn-rounded" onClick={this.showmore2} >View More</button>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-4 content-section implementation">
                        <Card title="Science Fair" subTitle="Are you a problem solver? Have an idea?"  className="school_5_3 ui-card-shadow" header={header}>
                            <div>
                                <h6 className="school_5_4">This is a platform to all the students to expeirence a wide range of competitions and learn from many different master minds. A lot of robotic projects made by our students are held for display and will be a platform to explore the little bots prepared by them. This will be held once a year.</h6>
                                <span id="dots3">  </span><span id="more3">
                                <ol>
                                    <li><h6>This even exposes the talent and quality of students and schools.</h6></li>
                                    <li><h6>When we enter the competition we understand importance of innovation in a preicese way.</h6></li>
                                    <li><h6>Students will learn a positive way of technology usage,team work and positive attitude,communication skills and lot more skill set is developed.</h6></li>
                                </ol></span>
                                <button id="btn3" className="btn btn-primary btn-rounded" onClick={this.showmore3} >View More</button>
                            </div>
                        </Card>
                    </div>
                </div>
                </div>
                    </ScrollableAnchor>
                    <br/>
            </div>
        )
    }
}

export default Schools;

