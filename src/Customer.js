import React from "react";

export default class Customer extends React.Component {

    constructor() {
        super();
        this.style = {
            marginLeft: '20px',
            textAlign: 'left'
        };
    }

    render() {
        return (
            <div style={this.style}>
                <p>{this.props.data.customerName} <br/>
                    {this.props.data.billingAddress.address} <br/>
                    {this.props.data.billingAddress.postalCode} {this.props.data.billingAddress.city} <br/>
                </p>
            </div>
        );
    }
}