import React, { Component } from 'react';

class GetInTouchSuccessMsg extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        return(
            <div style={{padding:30,paddingTop:200,height:600}}>
                <h1 style={{textAlign:"center"}}>We have recieved your query...!!! We will get back to you soon..!!!</h1>
            </div>
        )
    }
}

export default GetInTouchSuccessMsg;