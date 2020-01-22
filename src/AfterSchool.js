import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class AfterSchool extends Component{
    
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            registerform: {
                StudentName:"",
                ParentName: "",
                ParentMail:"",
                StudentMail:"",
                Venue:"",
                Mobile1:"",
                Mobile2:"",
                School: ""
            },
            registerformMessage: {
                StudentNameMessage:"",
                ParentNameMessage: "",
                ParentMailMessage:"",
                StudentMailMessage:"",
                VenueMessage:"",
                Mobile1Message:"",
                Mobile2Message:"",
                SchoolMessage: ""
            },
            registerformStatus: {
                displayTitle:false,
                StudentNameStatus:"",
                ParentNameStatus: "",
                ParentMailStatus:"",
                VenueStatus:"",
                Mobile1Status:"",
                SchoolStatus: "",
                registerBtnActive:false
            },
            registeredStatus:false,
            successMessage:"",
            errorMessage:""
        }
    }
    componentDidMount() {
        document.title = "Aviate Robotics | After School Program";
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
            case 'StudentName':
                    if(value!==""){
                        formValid.StudentNameStatus=true;
                        formMsg.StudentNameMessage="";
                    }
                    else{
                        formValid.StudentNameStatus=false;
                        formMsg.StudentNameMessage="Enter Student Name";
                    }
                    break;
            case 'ParentName':
                    if(value!==""){
                        formValid.ParentNameStatus=true;
                        formMsg.ParentNameMessage="";
                    }
                    else{
                        formValid.ParentNameStatus=false;
                        formMsg.ParentNameMessage="Enter Parent Name";
                    }
                    break;
            case 'ParentMail':
                    if(value!=="" && (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value))){
                        formValid.ParentMailStatus=true;
                        formMsg.ParentMailMessage="";
                    }
                    else if(value===""){
                        formValid.EmailStatus=false;
                        formMsg.EmailMessage="Enter Valid Email Id";
                    }else{
                        formValid.ParentMailStatus=false;
                        formMsg.ParentMailMessage="Invalid Email Id";
                    }
                    break;
            case 'StudentMail':
                        if(value!=="" && (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value))){
                            formMsg.StudentMailMessage="";
                        }
                        else if(value===""){
                            formMsg.StudentMailMessage="";
                        }else{
                            formMsg.StudentMailMessage="Invalid Email Id";
                        }
                        break;
            case 'Mobile1':
                    if(value!=="" && (value>=6000000000 && value <=9999999999)){
                        formValid.Mobile1Status=true;
                        formMsg.Mobile1Message="";
                    }else if(value===""){
                        formValid.Mobile1Status=false;
                        formMsg.Mobile1Message="Enter Mobile Number";
                    }else{
                        formValid.Mobile1Status=false;
                        formMsg.Mobile1Message="Invalid Mobile Number";
                    }
                    break;
            case 'Mobile2':
                        if(value!=="" && (value>=6000000000 && value <=9999999999)){
                            formMsg.Mobile2Message="";
                        }else if(value===""){
                            formMsg.Mobile2Message="";
                        }else{
                            formMsg.Mobile2Message="Invalid Mobile Number";
                        }
                        break;
            case 'Venue':
                    if(value!==""){
                        formValid.VenueStatus=true;
                        formValid.displayTitle=true;
                        formMsg.VenueMessage="";
                        
                    }else{
                        formValid.VenueStatus=false;
                        formValid.displayTitle=false;
                        formMsg.VenueMessage="Select Venue";
                    }
                    break;
            case 'School':
                    if(value!==""){
                        formValid.SchoolStatus=true;
                        formMsg.SchoolMessage="";
                    }else{
                        formValid.SchoolStatus=false;
                        formMsg.SchoolMessage="Enter Your School Name";
                    }
                    break;
            default:
                    break;
                }

        const regBtn = formValid.StudentNameStatus && formValid.ParentNameStatus && formValid.ParentMailStatus &&
        formValid.Mobile1Status && formValid.VenueStatus && formValid.SchoolStatus;
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
        axios.post( "https://firstproject-2811.firebaseio.com/afterschool.json",this.state.registerform).then(success=>{
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
                <h2 className="offset-md-4">Register Here for After School Program</h2>
                    
               <div className="col-md-4 offset-md-4">
                    
                    <form className="form-group form-bordered" onSubmit={this.handleSubmit} >
                    <span style={{fontSize:"12px"}}>Required fields are marked *</span>
                        <div className="form-group">
                            <label>Student Name*</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="StudentName" 
                                value={this.state.registerform.StudentName} 
                                placeholder="Enter Student Name"
                                onChange={this.handleChange}/>
                            <span className="text-danger">{this.state.registerformMessage.StudentNameMessage}</span>
                        </div> 
                        <div className="form-group">
                            <label>Parent Name*</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="ParentName" 
                                value={this.state.registerform.ParentName} 
                                placeholder="Enter Parent Name"
                                onChange={this.handleChange}/>
                            <span className="text-danger">{this.state.registerformMessage.ParentNameMessage}</span>
                        </div>   
                        <div className="form-group">
                            <label>Parent Mail id*</label>
                            <input 
                                type="text"
                                name="ParentMail" 
                                value={this.state.registerform.ParentMail}
                                className="form-control" 
                                placeholder="Enter Parent Mail id"
                                onChange={this.handleChange}/>
                            <span className="text-danger">{this.state.registerformMessage.ParentMailMessage}</span>
                        </div>
                        <div className="form-group">
                            <label>Student Mail id (if any)</label>
                            <input 
                                type="text"
                                name="StudentMail" 
                                value={this.state.registerform.StudentMail}
                                className="form-control" 
                                placeholder="Enter Student Mail id"
                                onChange={this.handleChange}/>
                            <span className="text-danger">{this.state.registerformMessage.StudentMailMessage}</span>
                        </div>    
                        <div className="form-group">
                            <label>Venue*</label>
                            <select 
                                className="form-control" 
                                name="Venue" 
                                value={this.state.registerform.Venue}
                                onChange={this.handleChange}>
                                <option value="">--Select Venue--</option>
                                <option value="Munchkins Group of Schools,Nizampet">Munchkins Group of Schools,Nizampet</option>
                                <option value="Little Elly School, Pragathi Nagar">Little Elly School, Pragathi Nagar</option>
                            </select>
                            <span className="text-danger">{this.state.registerformMessage.VenueMessage}</span>
                        </div>
                        
                        <div className="form-group">
                            <label>Mobile1*</label>
                            <input 
                                type="number" 
                                min="6666666666" 
                                max="9999999999" 
                                name="Mobile1" 
                                value={this.state.registerform.Mobile1}
                                className="form-control" 
                                placeholder="Mobile 1"
                                onChange={this.handleChange}/>
                            <span className="text-danger">{this.state.registerformMessage.Mobile1Message}</span>
                        </div>
                        <div className="form-group">
                            <label>Mobile2</label>
                            <input 
                                type="number" 
                                min="6666666666" 
                                max="9999999999" 
                                name="Mobile2" 
                                value={this.state.registerform.Mobile2}
                                className="form-control" 
                                placeholder="Mobile 2"
                                onChange={this.handleChange}/>
                            <span className="text-danger">{this.state.registerformMessage.Mobile2Message}</span>
                        </div>
                        <div className="form-group">
                            <label>School*</label>
                            <input 
                                type="text" 
                                name="School" 
                                value={this.state.registerform.School}
                                className="form-control" 
                                placeholder="Enter Student current studying school"
                                onChange={this.handleChange}/>
                            <span className="text-danger">{this.state.registerformMessage.SchoolMessage}</span>
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

export default withRouter(AfterSchool);