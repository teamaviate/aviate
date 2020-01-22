import React, { Component } from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
class Services extends Component{
    render(){
        const header = (
            <img alt="Card" src='showcase/resources/demo/images/usercard.png'/>
        );
        const footer = (
            <span>
                <Button label="View Classes"/>
            </span>
        );
        return (
            <div>
                <div className="row">
                    <div className="col-md-3 offset-md-1 ">
                        <Card title="School" subTitle=""  className="ui-card-shadow" footer={footer} header={header}>
                            <div>
                                In a present day 
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3 ml-5">
                        <Card title="Engineering colleges" subTitle=""  className="ui-card-shadow" footer={footer} header={header}>
                            <div>

                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3 ml-5">
                        <Card title="Events" subTitle=""  className="ui-card-shadow" footer={footer} header={header}>
                            <div>

                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
export default Services;