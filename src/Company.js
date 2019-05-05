import React from "react";

export default class Company extends React.Component {

    constructor() {
        super();
        this.style = {
            marginRight: '20px',
            textAlign: 'right'
        };
    }

    render() {
        return (
            <div style={this.style}>
                <p>{this.props.data.name} <br/>
                    {this.props.data.firstNameRepresentantLegal} {this.props.data.lastNameRepresentantLegal} <br/>
                    {this.props.data.address} <br/>
                    {this.props.data.postalCode} {this.props.data.city} <br/>
                    {this.props.data.phoneNumber} <br/>
                    {this.props.data.email} <br/>
                    TVA: {this.props.data.numeroTVA} <br/>
                    SIREN: {this.props.data.siren}</p>
            </div>
        );
    }
}