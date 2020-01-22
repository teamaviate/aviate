import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'primereact/button';
import {withRouter} from 'react-router-dom';
class GetInTouch extends Component{

    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            getInTouchform: {
                Name:"",
                Email:"",
                Subject: "",
                Message: ""
            },
            getInTouchformStatus: {
                NameStatus:false,
                EmailStatus:false,
                SubjectStatus:false,
                MessageStatus:false,
                sendMessageBtnActive:false
            },
            getInTouchformMessage:{
                NameMessage:"",
                EmailMessage:"",
                SubjectMessage: "",
                MessageMessage: ""
            },
            getInTouchRegStatus:false,
            successMessage:"",
            errorMessage:""
        }
    }
    componentDidMount() {
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
        const { getInTouchform } = this.state;
        if(this._isMounted){
            this.setState({
                getInTouchform: { ...getInTouchform, [name]: value }
            });
        }
        this.validate(name,value);
    }
    
    validate(name,value){
        const { getInTouchformStatus } = this.state;
        let formValid = this.state.getInTouchformStatus;
        let formMsg = this.state.getInTouchformMessage;
        switch(name){
            case 'Name':
                    if(value!==""){
                        formValid.NameStatus=true;
                        formMsg.NameMessage="";
                    }else{
                        formValid.NameStatus=false;
                        formMsg.NameMessage="Enter your name";
                    }
                    break;
            case 'Email':
                    if(value!=="" && (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value))){
                        formValid.EmailStatus=true;
                        formMsg.EmailMessage="";
                    }
                    else if(value===""){
                        formMsg.EmailMessage="Enter Email Id";
                        formValid.EmailStatus=false;
                    }
                    else{
                        formMsg.EmailMessage="Invalid Email Id";
                        formValid.EmailStatus=false;
                    }
                    break;
            case 'Subject':
                    if(value!==""){
                        formValid.SubjectStatus=true;
                        formMsg.SubjectMessage="";
                    }else{
                        formValid.SubjectStatus=false;
                        formMsg.SubjectMessage="Enter Subject";
                    }
                    break;
            case 'Message':
                    if(value!==""){
                        formValid.MessageStatus=true;
                        formMsg.MessageMessage="";
                    }else{
                        formValid.MessageStatus=false;
                        formMsg.MessageMessage="Enter your Message";
                    }
                    break;
            default:
                    break;
                }

        const regBtn = formValid.NameStatus && formValid.EmailStatus && formValid.SubjectStatus 
                        && formValid.MessageStatus;
        if (regBtn && this._isMounted){
            this.setState({
                getInTouchformStatus: { ...getInTouchformStatus, sendMessageBtnActive: true }
            });
        }else{
            if(this._isMounted){
                this.setState({
                    getInTouchformStatus: { ...getInTouchformStatus, sendMessageBtnActive: false }
                });
            }  
        }
    }
    sendMessage = () => {
        axios.post( "https://firstproject-2811.firebaseio.com/Messages.json",this.state.getInTouchform).then(success=>{
                  // To make a refreshed page look after the submit button is pressed
            if(this._isMounted){
                this.setState({successMessage : "Message Sent",errorMessage:""})
                this.setState({getInTouchRegStatus : true})
            }
        }).catch(error => {
          if (error.response) {
            if(this._isMounted){
                this.setState({ errorMessage: error.response.data.message, successMessage: "" });
            }
        } else {
            if(this._isMounted){
                this.setState({ errorMessage: error.message, successMessage: "" });
            }
        }
        })
      }


    handleSubmit=(event)=>{
        event.preventDefault();
        this.sendMessage();
        this.props.history.push('/getintouchsuccessmessage');
    }

    render(){
        return(
            <div>
                <div className="git">
                    <h1 className="text-center mt-5" >Leave a reply</h1>
                    <p className="text-center text-justify offset-md-2 col-md-8" id="touch1">Thanks for your interest in Aviate's services. Please provide the following information about your 
                    business needs to help us serve you better.</p>
                    <form className="col-md-8 offset-md-2 " onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input  type="text" 
                                    placeholder="Your Name " 
                                    name="Name" 
                                    value={this.state.getInTouchform.Name} 
                                    onChange={this.handleChange}
                                    className="form-control"/>
                            <span className="text-danger">{this.state.getInTouchformMessage.NameMessage}</span>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input  type="text" 
                                    placeholder="Your Email " 
                                    name="Email" 
                                    value={this.state.getInTouchform.Email} 
                                    onChange={this.handleChange}
                                    className="form-control"/>
                            <span className="text-danger">{this.state.getInTouchformMessage.EmailMessage}</span>
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <input  type="text" 
                                    placeholder="Subject " 
                                    name="Subject" 
                                    value={this.state.getInTouchform.Subject} 
                                    onChange={this.handleChange}
                                    className="form-control"/>
                            <span className="text-danger">{this.state.getInTouchformMessage.SubjectMessage}</span>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <input  type="text" 
                                    placeholder="Message " 
                                    name="Message" 
                                    value={this.state.getInTouchform.Message} 
                                    onChange={this.handleChange}
                                    className="form-control"/>
                            <span className="text-danger">{this.state.getInTouchformMessage.MessageMessage}</span>
                        </div>
                        <Button     label="Send Message"  
                                    style={{height:50}} 
                                    disabled={!this.state.getInTouchformStatus.sendMessageBtnActive} 
                                    className="p-button-raised p-button-danger form-control" />
                    </form>
                </div>
            </div>
        )
    }
}
export default withRouter(GetInTouch);