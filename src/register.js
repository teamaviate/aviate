import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class Register extends Component{
    // static id = 100;
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            registerform: {
                Course: "",
                Name:"",
                Mobile:"",
                Gender: "",
                Email:"",
                College: "",
                Branch:"",
                date:""
                // RegId:""
            },
            registerformMessage: {
                CourseMessage: "",
                NameMessage:"",
                MobileMessage:"",
                GenderMessage: "",
                EmailMessage:"",
                CollegeMessage: "",
                BranchMessage:""
            },
            registerformStatus: {
                displayTitle:false,
                CourseStatus:false,
                NameStatus:false,
                MobileStatus:false,
                GenderStatus:false,
                EmailStatus:false,
                CollegeStatus:false,
                BranchStatus:false,
                registerBtnActive:false
            },
            registeredStatus:false,
            successMessage:"",
            errorMessage:""
        }
    }
    componentDidMount() {
        document.title = "Aviate Robotics | Register for Courses";
        this._isMounted = true;
        window.scrollTo(0, 0)
      }
    componentWillUnmount() {
        this._isMounted = false;
     }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const { registerform } = this.state;
        if(this._isMounted){
            this.setState({
                registerform: { ...registerform, [name]: value }
            });
        }
        this.validate(name,value);
    }
    
    validate(name,value){
        const { registerformStatus } = this.state;
        // let formRegister = this.state.registerform;
        let formValid = this.state.registerformStatus;
        let formMsg = this.state.registerformMessage;
        switch(name){
            case 'Name':
                    if(value!==""){
                        formValid.NameStatus=true;
                        formMsg.NameMessage="";
                    }
                    else{
                        formValid.NameStatus=false;
                        formMsg.NameMessage="Enter your Name";
                    }
                    break;
            case 'Mobile':
                    if(value!=="" && (value>=6000000000 && value <=9999999999)){
                        formValid.MobileStatus=true;
                        formMsg.MobileMessage="";
                    }else if(value===""){
                        formValid.MobileStatus=false;
                        formMsg.MobileMessage="Enter Mobile Number";
                    }else{
                        formValid.MobileStatus=false;
                        formMsg.MobileMessage="Invalid Mobile Number";
                    }
                    break;
            case 'Gender':
                    if(value!==""){
                        formValid.GenderStatus=true;
                        formMsg.GenderMessage="";
                    }else{
                        formValid.GenderStatus=false;
                        formMsg.GenderMessage="Select Your Gender";
                    }
                    break;
            case 'Course':
                    if(value!==""){
                        formValid.CourseStatus=true;
                        formValid.displayTitle=true;
                        formMsg.CourseMessage="";
                        
                    }else{
                        formValid.CourseStatus=false;
                        formValid.displayTitle=false;
                        formMsg.CourseMessage="Select Required Course";
                    }
                    break;
            case 'Email':
                    if(value!=="" && (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value))){
                        formValid.EmailStatus=true;
                        formMsg.EmailMessage="";
                    }
                    else if(value===""){
                        formValid.EmailStatus=false;
                        formMsg.EmailMessage="Enter Valid Email Id";
                    }else{
                        formValid.EmailStatus=false;
                        formMsg.EmailMessage="Invalid Email Id";
                    }
                    break;
            case 'College':
                    if(value!==""){
                        formValid.CollegeStatus=true;
                        formMsg.CollegeMessage="";
                    }else{
                        formValid.CollegeStatus=false;
                        formMsg.CollegeMessage="Enter Your College Name";
                    }
                    break;
            case 'Branch':
                    if(value!==""){
                        formValid.BranchStatus=true;
                        formMsg.BranchMessage="";
                    }else{
                        formValid.BranchStatus=false;
                        formMsg.BranchMessage="Enter Your Branch Name";
                    }
                    break;
            default:
                    break;
                }

        const regBtn = formValid.NameStatus && formValid.MobileStatus && formValid.GenderStatus 
                        && formValid.CourseStatus && formValid.EmailStatus && formValid.CollegeStatus && formValid.BranchStatus;
        if (regBtn && this._isMounted){
            this.setState({
                registerformStatus: { ...registerformStatus, registerBtnActive: true }
            });
        }else{
            if(this._isMounted){
                this.setState({
                    registerformStatus: { ...registerformStatus, registerBtnActive: false }
                });
            }
        }
    }
    register = () => {
        // const { registerform } = this.state;
        // Register.id=Register.id+1;
        // this.setState({
        //     registerform: { ...registerform, RegId: "AR"+ Register.id}
        // })
        // console.log(Register.id);
        // console.log(this.state.registerform.RegId);
        axios.post( "https://firstproject-2811.firebaseio.com/registers.json",this.state.registerform).then(success=>{
                  // To make a refreshed page look after the submit button is pressed
            if(this._isMounted){
                this.setState({successMessage : "Successfully Registered",errorMessage:""})
                this.setState({registeredStatus : true})
            }
        }).catch(error => {
          if (error.response) {
            if(this._isMounted){
                this.setState({ errorMessage: error.response.data.message, successMessage: "" });
            }
            } else {
            if((this._isMounted)){
                this.setState({ errorMessage: error.message, successMessage: "" });
            }
            }
        })
      }


    handleSubmit=(event)=>{
        event.preventDefault();
        this.register();
        this.props.history.push('/regsuccessmessage');
    }
    
    render(){
        return(
            <div>
                {this.state.registerformStatus.displayTitle
                    ?<h1 className="text-center">{this.state.registerform.Course}</h1>
                    :null
                }
               <div className="col-md-4 offset-md-4">
                    <h2>Register Here </h2>
                    
                    <form className="form-group form-bordered" onSubmit={this.handleSubmit} >
                    <span style={{fontSize:"12px"}}>Required fields are marked *</span>
                        <div className="form-group">
                            <label>Course*</label>
                            <select 
                                className="form-control" 
                                name="Course" 
                                value={this.state.registerform.Course}
                                onChange={this.handleChange}>
                                <option value="">--Select Course--</option>
                                <option value="Fundamental level robotics course">Fundamental level robotics course</option>
                                <option value="Intermediate level robotics Course">Intermediate level robotics Course</option>
                                <option value="Advanced level robotics course">Advanced level robotics course</option>
                            </select>
                            <span className="text-danger">{this.state.registerformMessage.CourseMessage}</span>
                        </div>
                        <div className="form-group">
                            <label>Name*</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="Name" 
                                value={this.state.registerform.Name} 
                                placeholder="Your Name"
                                onChange={this.handleChange}/>
                            <span className="text-danger">{this.state.registerformMessage.NameMessage}</span>
                        </div>
                        <div className="form-group">
                            <label>Mobile*</label>
                            <input 
                                type="number" 
                                min="6666666666" 
                                max="9999999999" 
                                name="Mobile" 
                                value={this.state.registerform.Mobile}
                                className="form-control" 
                                placeholder="Your Mobile No"
                                onChange={this.handleChange}/>
                            <span className="text-danger">{this.state.registerformMessage.MobileMessage}</span>
                        </div>
                        <div className="form-group">
                            <label>Email id*</label>
                            <input 
                                type="text"
                                name="Email" 
                                value={this.state.registerform.Email}
                                className="form-control" 
                                placeholder="Your Email id"
                                onChange={this.handleChange}/>
                            <span className="text-danger">{this.state.registerformMessage.EmailMessage}</span>
                        </div>
                        <div className="form-group">
                            <label>Gender*</label>
                            <input 
                                className="ml-3" 
                                type="radio" 
                                name="Gender" 
                                value="Male" 
                                onChange={this.handleChange}/>Male
                            <input 
                                className="ml-3" 
                                type="radio" 
                                name="Gender" 
                                value="Female" 
                                onChange={this.handleChange}/>Female
                            <span className="text-danger">{this.state.registerformMessage.GenderMessage}</span>
                        </div>
                        <div className="form-group">
                            <label>College*</label>
                            <input 
                                type="text" 
                                name="College" 
                                value={this.state.registerform.College}
                                className="form-control" 
                                placeholder="Your College name"
                                onChange={this.handleChange}/>
                            <span className="text-danger">{this.state.registerformMessage.CollegeMessage}</span>
                        </div>
                        <div className="form-group">
                            <label>Branch*</label>
                            <input 
                                type="text"
                                name="Branch" 
                                value={this.state.registerform.Branch}
                                className="form-control" 
                                placeholder="Your Branch name"
                                onChange={this.handleChange}/>
                            <span className="text-danger">{this.state.registerformMessage.BranchMessage}</span>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled={!this.state.registerformStatus.registerBtnActive}
                            >Register</button>
                        {/* {this.state.registeredStatus? */}
                            <div    className="text-success"
                                    name="successMessage"
                                    value={this.state.successMessage}
                            >{this.state.successMessage}
                            </div>
                            <div    className="text-danger"
                                    name="errorMessage"
                                    value={this.state.errorMessage}
                            >{this.state.errorMessage}
                            </div> 
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);