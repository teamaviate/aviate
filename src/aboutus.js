import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import './aboutus.css';

class AboutUs extends Component{
    componentDidMount() {
        document.title = "Aviate Robotics | About Us";
        window.scrollTo(0, 0)
      }
    render(){
        return(
            <React.Fragment>
                <div className="aboutusinfo">
                </div>
                <div className="col-md-6 offset-md-3 aboutustext">
                        <p>At Aviate Robotics, we believe every student has a desire of learning things in a play based practical approach. Innovation and experience makes us happy: Our goal is to remove any technical or financial barriers that can prevent a student from learning the better way. We are excited to help you on you jounrey!</p>
                </div>
                <div className="row">
                    <div className="col-md-5 vision">
                        <Bounce left>
                            <div className="content-section implementation">
                                <p>OUR</p>
                                <h3 style={{marginTop:"-20px"}}><b>MISSION</b></h3>
                                <p>To be a trusted and preferred one stop robotics platform integrated with S.T.E.A.M Education for the students which can help them think through situations and find the right solutions.</p>
                            </div>
                        </Bounce>
                    </div>
                    <div className="col-md-5 vision1">
                        <Bounce right>
                            <div className="content-section implementation" >
                                <p>OUR</p>
                                <h3 style={{marginTop:"-20px"}}><b>VISION</b></h3>
                                <p>Create and deliver value based educational robotics services by seamlessly integrating Science, Technology, Engineering, Art and Mathematics.</p>
                            </div>
                        </Bounce>
                    </div>
                </div>
                <div className="whatdrives">
                    <h2 className="ml-3"><b>What drives our people</b></h2>
                    <div className="gridContainer whatDrivesOurPeople">
                        <div className=" gridContent ex-lg-flex-1 lg-flex-1 tl-flex-1 tp-flex-1">
                            <div className="gridContentContainer centerText ">
                                <h2> Passion</h2>
                                <p> We're passionate about robotics. We’re relentless in finding practical and ingenious
                                    solutions through which 
                                     our students can connect them to the real world. We’re convinced that technology and innovation will carve an
                                    indomitable
                                    path in utilising robots for the better.</p>
                            </div>
                        </div>
                        <div className=" gridContent ex-lg-flex-1 lg-flex-1 tl-flex-1 tp-flex-1">
                            <div className="gridContentContainer centerText ">
                            <h2> Innovation </h2>
                            <p> We believe that we’re only as good as we were yesterday, and that real innovation means
                                that
                                we constantly look ahead and build expertise in emerging capabilities and adopt different learning environments that will drive
                                success
                                for our students tomorrow.
                            </p>
                            </div>
                        </div>
                        <div className=" gridContent ex-lg-flex-1 lg-flex-1 tl-flex-1 tp-flex-1">
                            <div className="gridContentContainer centerText ">
                            <h2 > Collaboration</h2>
                            <p> At the heart of everything we do as a services company is our ability to collaborate
                                seamlessly
                                across teams, with different academic  background, and
                                diverse
                                capabilities. We believe the challenges that aviate faces today needs collaboration
                                between
                                teams, capabilities and points-of-view.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* <div className="row" id="aboutus1">
                <div className="col-md-6 container">
                    <h2>About Aviate</h2>
                    <p className="text-justify">
                        Aviate-Robotics is a multi-disciplinary Robotics with Multirotor technology that has 
                        specially designed curriculum to teach engineering aspirants as well as  school students.
                        The course can be taught from the scratch to pro level.Robotics includes Mechanical, Electrical, 
                        Electronics and Programming which encourages students to connect these disciplines. 
                        Students are aksed to create their own Robot and in this process, they begin to learn through doing.
                    </p>
                    <br/>
                    <p className="text-justify">
                        Aviate-Robotics has gone through lot of research to develop Robotic Models and Curriculum which might inculcate 
                        Mechanical, Electrical, Electronics and Programming skills amongst the students and also may induce 
                        Thinking, Observation, Analyzing and Creative Skills to cater to the future world.
                    </p><br/>
                    <p className="text-justify">
                        Despite teaching robotics Aviate-Robotics also conducts workshops in engineering colleges as well as summer 
                        camps in schools providing the students a lot of hands on experience while inducing the programming
                        skills, a must in current technology advancements. It also helps you join in the best internship
                        programs around the city.
                    </p>
                </div>  
                <div className="col-md-6">  <br/><br/><br/>
                    <Bounce right>
                    <div className="content-section implementation" >
                        <Panel className=" text-justify"  header="Vision">
                            Aviate-Robotics is committed to offering quality education in the field of robotics training.
                            The trainers provide their support to budding engineers and students who are willing to learn the
                            concepts of robotics and advanced controlling via latest embedded systems technologies.
                        </Panel>
                    </div><br/>
                    <div className="content-section implementation">
                        <Panel className=" text-justify" header="Mission">
                            We teach the students, how to create their own motherboards and own controlling modules, allowing them
                            to make their own custom applications. With this custom module training, you gain real knowledge and 
                            start building your own custom robot at the minimum cost and minimum resources.
                        </Panel>
                    </div><br/>
                    <div className="scontent-section implementation">
                        <Panel className=" text-justify" header="Quality policy">
                            Join the advanced robotics training courses and learn how to build a robot from scratch. 
                            Get circuits diagrams, codes, mechanical components,  2D/ 3D designs, electronics components, 
                            data sheets, documents to learn from the best.
                            Study content is designed and developed to meet the industry demands.
                        </Panel>
                    </div>
                    </Bounce>
                </div>
            </div>

        <div className="row" style={{padding:30}}>
            <div className="col-md-6" ><br/>
                <h2>Why Aviate?</h2>
                <img className="img-fluid" style={{ height:475}} src={require("./assets/QuestionMark.png")} alt="logo" />
            </div>

            <div className="col-md-6 text-justify"><br/><br/><br/>
                <p>
                    With the current technology changes in the world, there is an urge for inducing scientific thinking among
                    the students from school level itself. The thing is we are learning how to use the technology instead of thinking
                    about inventing one such next generation most powerful technology.
                </p>
                <p>
                    Considering the indian education system there are only a few schools that offer robotics in curriculum.
                    The main problem in offering robotics across Indian classrooms has been
                    </p>
                    <ol>
                        <li>the lack of infrastructural facilities</li>
                        <li>the cost factor and </li>
                        <li>Technical adaptability of students.</li>
                    </ol>
                
                <p>
                    <strong>Aviate</strong> helps you in bridging these problems
                    </p>
                    <ol>
                        <li>by inculcating Robotic programme to the students in an applied manner which they can easily understand
                            through our simplified and customized curriculum. </li>
                        <li>and providing these services at a minimum fare.</li>
                    </ol>
                
            </div> */}
        {/* </div> */}
        </React.Fragment>
    )
}
}

export default AboutUs;