import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            
            <h1 style={{textAlign:"center",marginTop:"30vh",marginBottom:"50vh"}}>
                Please check the url<br/>
            <Link to="/">Go to Home </Link>
            </h1>
          </div>;
    }
}
export default NotFoundPage;