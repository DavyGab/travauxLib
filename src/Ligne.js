import React from "react";
import {Badge, Card, Col, Container, Row} from "react-bootstrap";

export default class Ligne extends React.Component {

    render() {
        return (
            <Card body>
                <Container>
                    <Row>
                        <Col><h5>{ this.props.data.designation }</h5></Col>
                        <Col className="text-right"><h6><Badge variant="secondary">{ this.props.data.prixUnitaireHT } € HT</Badge></h6></Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <p className="font-italic">{ this.props.data.description }</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>prixUnitaireHT: { this.props.data.prixUnitaireHT } €</p>
                            <p>quantite: { this.props.data.quantite }</p>
                            <p>unite: { this.props.data.unite }</p>
                            <p>prixHT: { this.props.data.prixHT } €</p>
                        </Col>
                        <Col>
                            <p>tauxTVA: { this.props.data.tauxTVA } %</p>
                            <p>montantTVA: { this.props.data.montantTVA } €</p>
                            <p>prixTTC: { this.props.data.prixTTC } €</p>
                        </Col>
                    </Row>
                </Container>
            </Card>
        );
    }
}