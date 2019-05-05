import React, { useState, useEffect } from "react"
import {Accordion, Button, Card, Col, Container, Row, Spinner} from 'react-bootstrap';
import Company from "./Company";
import Customer from "./Customer";
import Header from "./Header";
import Ligne from "./Ligne";
import * as axios from "axios";


function useFetch(url, defaultData) {
    const [data, updateData] = useState(defaultData)

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const result = await axios(url);
            if (!ignore) updateData(result.data);
        }

        fetchData();
        return () => { ignore = true; }
    }, [url]);


	
    return data
}

function useFetchData() {
	const query = 'https://api.travauxlib.com/api/devis-pro/JKusHl8Ba8MABIjdCtLZOe2lxxnUfX'
	// const query = 'http://localhost:3000/data.json'
    return useFetch(query)
}

function Devis() {
    const devis = useFetchData()
    const [viewByPiece, setViewByPiece] = useState(false)

    function handleViewByPieceChange(status) {
        setViewByPiece(status)
    }

    if (!devis) {
        return (
            <div>
                <Header/>
                <Spinner animation="grow" variant="dark" />
            </div>
        )
    }
    return (
        <div>
            <Header viewByPiece={ viewByPiece } handleView={ handleViewByPieceChange } />
            <Card className="m-3">
                <Card.Header>Devis du { devis.date } - Valable : { devis.dureeValidite }</Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Customer data={ devis.deal }/>
                            </Col>
                            <Col>
                                <Company data={ devis.company }/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>{ devis.title }</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>{ devis.introductionLetter }</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="text-center">
                                <h5>Prix total HT : { devis.prixTotalHT } €</h5>
                            </Col>
                            <Col className="text-center">
                                <h5>Prix total TTC : { devis.prixTotalTTC } €</h5>
                            </Col>
                        </Row>

                        { !viewByPiece && devis.sections[0].lots.map(lot => (
                            <Card className="m-2">
                                <Card.Header>
                                    { lot.label }
                                </Card.Header>
                                <Card.Body>
                                    <Card.Body>
                                        { lot.lignes.map(ligne => (
                                            <Ligne data={ ligne }/>
                                        ))}
                                    </Card.Body>
                                </Card.Body>
                            </Card>
                        )) }
                        { viewByPiece && devis.locations.map(location => (
                            <Card className="m-2">
                                <Card.Header>
                                    { location.label }
                                </Card.Header>
                                <Card.Body>
                                    <Card.Body>
                                        { devis.sections[0].lots.map(lot =>
                                            lot.lignes.filter(ligne =>
                                                ligne.locationsDetails.locations.map(l => l.uuid).includes(location.uuid)
                                            ).map(ligne => (
                                                <Ligne data={ligne}/>
                                            ))
                                        ) }
                                    </Card.Body>
                                </Card.Body>
                            </Card>
                        )) }
                        { viewByPiece && (
                            <Card className="m-2">
                                <Card.Header>
                                    Autres prestations
                                </Card.Header>
                                <Card.Body>
                                    <Card.Body>
                                        { devis.sections[0].lots.map(lot =>
                                            lot.lignes.filter(ligne =>
                                                !ligne.locationsDetails.locations.length
                                            ).map(ligne => (
                                                <Ligne data={ligne}/>
                                            ))
                                        ) }
                                    </Card.Body>
                                </Card.Body>
                            </Card>
                        ) }

                        <Row>
                            <Col className="text-center">
                                <h5>Prix total HT : { devis.prixTotalHT } €</h5>
                            </Col>
                            <Col className="text-center">
                                <h5>Prix total TTC : { devis.prixTotalTTC } €</h5>
                            </Col>
                        </Row>

                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Devis;
