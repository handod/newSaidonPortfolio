import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tilt from 'react-tilt';
import Card from "react-bootstrap/Card";
import L_HIT from "../../assets/img/education/hitHolonLogo.svg"
import Container from "react-bootstrap/Container";
import './educationStyle.css';

const Education = () => {
    return (
        <div id="education">
            <h1 className="pt-3 text-center font-details-b pb-3">EDUCATION</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={L_HIT} alt="Accenture logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center">B.Sc In Computer Science</Card.Title>
                                </div>
                                <Card.Text>
                                ⭐ Graduated in honors with GPA of 94/100.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Education;