import React, { Component } from 'react';

class RegSuccess extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        return(
            <div style={{padding:30,paddingTop:200,height:600}}>
                <h1 style={{textAlign:"center"}}>Registration Confirmed! We will get back to you soon..!!!</h1>
            </div>
        )
    }
}

export default RegSuccess;