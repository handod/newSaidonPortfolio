import React from 'react';
import './aboutStyle.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from '../../assets/img/profile/profile.jpeg';
import Button from 'react-bootstrap/Button';
import DavidResume from '../../files/DavidSaidonCV.pdf'

const About = () => {
    return (
        <div id='about'>
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>

                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                <h6>Hello again! I'm<strong>&nbsp;David Saidon</strong>.</h6>
                                <h6>Computer Science top-class graduate. from an early age I have been explored the exciting science of computers.<br /><br />
            I am EXTREMELY passionate about what I do and see it as my life profession.<br />
            From childhood through IDF to college, I have been a team-player and part of a system.<br /><br />
            The motivation that I have about software development is beyond perception.
            I have many hobbies, but the top of all is Creativity.<br />
            As I see myself as a Software Developer, I continue my path as a creator of interesting and exciting new things. <br /><br />
            I'm always updated to new technologies and keep up the pace every single day, that is why I also see my self as a Knowledge Gainer. <br />
            I am currently looking for a junior software developer role, where I can implement all that is written above.<br /><br />
            You are more than welcome to keep explore my portfolio, exciting things are yet to come...</h6>
                            </Row>

                            <Row>
                                <Col className="d-flex justify-content-center flex-wrap my-details">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">Let's Talk</Button>
                                        </a>
                                    </div>
                                    <div>
                    <a href={DavidResume} target="_blank" rel="David Saidon">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/handod" target="_blank" rel="David Saidon">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/david-saidon-6a4797184/" target="_blank" rel="David Saidon">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default About;