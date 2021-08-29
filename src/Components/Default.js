import React, { Component } from 'react'

export default class Default extends Component {
    
    render() {
        console.log(this.props);
        
       
        return (
            <div className="container">
                <div className="row">
                    <div className="text-title text-uppercase text-center col-10 mx-auto p-5 ">
                        <h1 className="display-3">
                            page not found
                        </h1>
                        <h3>
                            The requested url <span className="text-danger">{this.props.location.pathname}</span> was not found
                        </h3>
                    </div>
                </div>
                
            </div>
        )
    }
}
