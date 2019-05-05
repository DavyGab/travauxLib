import React from "react";
import {Button, Navbar} from "react-bootstrap";

function header({ handleView }) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">TravauxLib</Navbar.Brand>
                    <Button variant="outline-info" className="mr-sm-2" onClick={ () => handleView(true) }>Vue par pièce</Button>
                    <Button variant="outline-info" onClick={ () => handleView(false) }>Vue par travaux</Button>
            </Navbar>
        </div>
    );
}

export default header;