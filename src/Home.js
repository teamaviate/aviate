import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { MDBIcon } from "mdbreact";
import Reveal from 'react-reveal/Reveal';
import Zoom from 'react-reveal/Zoom';


import './home.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import config from 'react-reveal/globals';

config({ ssrFadeout: true });

const properties = {
    duration: 10000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false
}

class Home extends Component {
    constructor(props) {
        super(props); 
        this.state = {
          scrollstatus : false,
          videoresume : false
        };
        // this.handleScroll = this.handleScroll.bind(this);
      }


    // handleScroll = () => {
    //     this.setState({scrollstatus : true});
    // }

    componentDidMount() {
        document.title = "Aviate Robotics | S.T.E.A.M Education";
        // window.addEventListener('scroll',this.handleScroll,true);
        window.scrollTo(0, 0);
        this.setState({videoresume:true});
    }
    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll);
        this.setState({videoresume:false});

    }

    render() {
        return (
            <div >
                <video  autoPlay={this.state.videoresume} muted={true} loop className="myVideo">
                    <source src={require("./assets/My Movie1.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
          </video>
                <div className="layer_1">
                    <Zoom Center><p className="layer_1_1 ">Unleash the joy of learning in a S.T.E.A.M World</p></Zoom>
                    <Zoom center><p className="layer_1_2">Get  enlightened with the S.T.E.A.M Education introduced by Aviate Robotics. Lets start adopting to the whole new way of learning, which the 21<sup>st</sup> century  students needs to develop tomorrow's world.   </p>  </Zoom>
                </div>

                <div className="layer_2">
                    <Reveal effect="fadeInUp">
                        <Reveal effect="fadeInUp">
                            <h4 className="layer_2_1">The 21<sup>st</sup> century education is about having the ability to think critically and creatively, to collaborate with others, and to communicate clearly sets students up for a mission through</h4>
                        </Reveal>
                        <Reveal effect="fadeInUp"><h1 className="layer_2_2">S.T.E.A.M. education</h1></Reveal>
                        <Reveal effect="fadeInUp"><h2 className="layer_2_3">Bring your school into the 21<sup>st</sup> century</h2></Reveal>


                        <div className="row">
                            <div className=" layer_2_3_1 ">
                                <Reveal effect="fadeInUp"> <h4 className="layer_2_4">Encourage student-centered learning</h4></Reveal>
                                <Reveal effect="fadeInUp"> <h4 className="layer_2_4">Collaborate with educational resources and let the students get benefit in the light of new advancements</h4></Reveal>
                                <Reveal effect="fadeInUp">  <h4 className="layer_2_4">Take the lead instead of trailing behind, get integrated with the society</h4></Reveal>
                                <Reveal effect="fadeInUp">   <h4 className="layer_2_4">Actively seek out new ways of learning methods</h4>                    </Reveal>
                            </div>
                        </div>
                    </Reveal>
                </div>


                <div className="row  layer_3" >
                    <Reveal effect="fadeInUp">
                        <div className="col-md-4" >
                            <div>
                                <Reveal effect="fadeInUp">
                                    <MDBIcon className="layer_3_1" icon="graduation-cap" size="4x" />

                                    <h5 className="layer_3_1_1">Learn from the</h5>
                                    <h3 className="layer_3_1_1">the best educational resources</h3>
                                </Reveal>
                            </div>
                            <div>
                                <Reveal effect="fadeInUp">
                                    <MDBIcon className="layer_3_1" icon="star" size="4x" />
                                    <h5 className="layer_3_1_1">Adopt </h5>
                                    <h3 className="layer_3_1_1"> to the real S.T.E.A.M education</h3>
                                </Reveal>
                            </div>
                            <div>
                                <Reveal effect="fadeInUp">
                                    <MDBIcon className="layer_3_1" icon="award" size="4x" />
                                    <h5 className="layer_3_1_1">benefit from</h5>
                                    <h3 className="layer_3_1_1">student-centered learning and guidance</h3>
                                </Reveal>
                            </div>
                        </div>
                        <div className="col-md-7 offset-md-1 layer_3_2_0" style={{ textAlign: "left" }}>
                            <div className="layer_3_2">
                                <Reveal effect="fadeInUp">
                                    <h5 className="layer_3_2_1" style={{ marginTop: "-5vh" }}>what will my children need twenty or fifty years from now? </h5>
                                    <h5>Start today: Think about how a 21st century school student learns</h5>
                                </Reveal>
                            </div>
                            <div className="layer_3_2">
                                <Reveal effect="fadeInUp">
                                    <h5 className="layer_3_2_1">How can I help them acquire right skills?</h5>
                                    <h5> Try adopting: different learning environments suited to various sorts of collaboration and group work</h5>
                                </Reveal>
                            </div>
                            <div className="layer_3_2">
                                <Reveal effect="fadeInUp">
                                    <h5 className="layer_3_2_1">How to help my children make use of their skills in real world ?</h5>
                                    <h5>Encourage: them to contribute to different real time projects and to take leadership of such programs</h5>
                                </Reveal>
                            </div>
                            <div className="layer_3_2">
                                <Reveal effect="fadeInUp">
                                    <h5 className="layer_3_2_1">How good is the technology in my children's classroom ?</h5>
                                    <h5>Ask for S.T.E.M Labs: find ways to connect their academics with today's technology</h5>
                                </Reveal>
                            </div>

                            <div className="layer_3_2">
                                <Reveal effect="fadeInUp">
                                    <h5 className="layer_3_2_1">What I can do to see the change in education on a broad scale ?  </h5>
                                    <h5>Introduce S.T.E.A.M Eduction : a perfect learning environment with play based learning   </h5>
                                </Reveal>
                            </div>
                            <Reveal effect="fadeInUp">
                                <h4 className="layer_3_2">Looking for best educational resources to build a <b className="layer_3_2_1">21<sup>st</sup> century skills ?</b> <br /><b className="layer_3_2_2"> AVIATE ROBOTICS </b> is the right choice for you! </h4>
                            </Reveal>
                        </div>
                    </Reveal>
                </div>


                <div className="layer_4">
                    <Reveal effect="fadeInUp">
                        <h2>Get benefited through S.T.E.A.M education</h2>
                        <div className="row">
                            <div className="col-md-2">
                                <Reveal effect="fadeInUp">
                                    <img alt="robot" className="robot2 img-responsive" src={require('./assets/Robot_2.png')} />
                                </Reveal>
                            </div>
                            <div className="col-md-6 offset-md-3 layer_4_2">
                                <Reveal effect="fadeInUp">
                                    <h4 className="layer_4_2_2">All the students from grade I to grade X who ever interested to learn robotics which parallely encourages them to learn basic academic concepts that are integrated with real-world lessons as students apply science, math, technology, art and engineering to them can onboard into our S.T.E.A.M Education program.</h4>
                                </Reveal>
                                <Reveal effect="fadeInUp">
                                    <div className="layer_4_2_1">
                                        <h5>Explore the possibilities</h5>
                                        <h5>New adventure with science and math everyday</h5>
                                        <h5> Creativity and collaboration</h5>
                                        <h5> Innovation in each step</h5>
                                    </div>
                                </Reveal>
                                <Reveal effect="fadeInUp">
                                    <h4 className="layer_4_2_2">Aviate Robotics helps you through connecting dots and get it to the real picture. Experience the real learning in a friendly environment with an ecstatic educators.</h4>
                                    <div>
                                        <Link to='ourservices/schools' className="btn btn-danger btn-rounded layer_4_2_3"  >Robotics-School</Link>
                                        <Link to='/courses' className="btn btn-danger btn-rounded layer_4_2_3" >Courses Offered</Link>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="row layer_5">
                    <Reveal effect="fadeInUp">
                        <div className="layer_5_1 col-md-5">
                            <h2>S.T.E.A.M EDUCATION:</h2><br />
                            <p className="text-justify layer_5_1_1">S.T.E.A.M is a curriculum based on the idea of educating students in five specific disciplines —
                                Science, Technology, Engineering, Art and Mathematics — in an interdisciplinary and applied approach.
                        Rather than teaching the five disciplines as separate and discrete subjects, S.T.E.A.M integrates them into a cohesive learning paradigm based on real-world. </p>

                            <p className="text-justify layer_5_1_1">What separates S.T.E.A.M from the traditional science and math education is the blended learning
                            environment and showing students how the scientific method can be applied to everyday life.
                            Aviate teaches students computational thinking and focuses on the real world applications of problem solving.
                    As mentioned before, S.T.E.A.M education begins while students are very young.</p>
                        </div>
                        <div className="col-md-7">
                            <iframe className="layer_5_2" title="video" src="https://www.youtube.com/embed/xdnLIP_seqI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </Reveal>
                </div>

                <div className="layer_6">
                    <img alt="testimonials" width="100vw" height="100vh" style={{ borderRadius: "50%", marginTop: "-8vh" }} className="layer_6_1" src={require('./assets/invquote.jpg')} />
                    <div className="col-md-12">
                        <h2 className="layer_6_2">Why students love Aviate Robotics</h2>
                    </div>
                    <div>
                        <Slide {...properties}>
                            <div className=" layer_6_0">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img alt="Saadia" width="150vw" height="150vh" className="layer_6_3" src={require('./assets/female.png')} />
                                        <p className="layer_6_4_1 col-md-6">"The journey with Aviate was very insightful. The mentors were always ready to clarify any kind of vacuous doubts.There can't be a better place than Aviate to start your journey of actual learning. "</p>
                                        <p className="layer_6_4_2">- Saadia Hassan</p>
                                    </div>
                                    <div className="col-md-4">
                                        <img alt="Renu" width="150vw" height="150vh" className="layer_6_3" src={require('./assets/female.png')} />
                                        <p className="layer_6_4_1 col-md-6">"The course provided by Aviate Robotics has good value for money.I'd recommend Aviate to anybody who wants to learn about Robotics right from the basics, be it electronics stuff or programming."</p>
                                        <p className="layer_6_4_2">- Renu</p>
                                    </div>
                                    <div className="col-md-4">
                                        <img alt="yashwanth" width="150vw" height="150vh" className="layer_6_3" src={require('./assets/male.jpg')} />
                                        <p className="layer_6_4_1 col-md-6">"Aviate Robotics provided value based robotic educational services. The team is energetic and so patient enough to clear each and every confusion. I wish them a great future ahead."</p>
                                        <p className="layer_6_4_2">- Yashwanth</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" layer_6_0">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img alt="Vishnu" width="150vw" height="150vh" className="layer_6_3" src={require('./assets/male.jpg')} />
                                        <p className="layer_6_4_1 col-md-6">"The course is really helpful for beginners who are interested to learn robotics. I would recommend this course provided by Aviate Robotics for thosewho are really interested in robotics."</p>
                                        <p className="layer_6_4_2">- Vishnu</p>
                                    </div>
                                    <div className="col-md-4">
                                        <img alt="Mounika" width="150vw" height="150vh" className="layer_6_3" src={require('./assets/female.png')} />
                                        <p className="layer_6_4_1 col-md-6">"Had a great journey with Aviate Robotics. The course provided precise content and will be a basic guide for those beginners like me. Great Experience"</p>
                                        <p className="layer_6_4_2">- Mounika</p>
                                    </div>
                                    <div className="col-md-4">
                                        <img alt="yashwanth" width="150vw" height="150vh" className="layer_6_3" src={require('./assets/male.jpg')} />
                                        <p className="layer_6_4_1 col-md-6">"Aviate Robotics helped me building basics on robotics. The course structure was very good. They are good at teaching programming. Good experience learning with aviate."</p>
                                        <p className="layer_6_4_2">- Vinay</p>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>


            </div>

        )
    }
}

export default Home;