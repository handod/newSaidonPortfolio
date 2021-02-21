import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tilt from 'react-tilt';
import Card from "react-bootstrap/Card";
import L_HIT from "../../assets/img/education/hitHolonLogo.svg"
import L_Udemy from "../../assets/img/education/udemyImg.png"
import Container from "react-bootstrap/Container";
import './educationStyle.css';

const educations = [{
    title: 'B.Sc In Computer Science',
    img: L_HIT,
    texts: ['⭐ Graduated in honors with GPA of 94/100.']
},
{
    title: 'Online Courses',
    img: L_Udemy,
    texts: ['✔ The Complete 2019 Web Development Bootcamp.',
        '✔ React - The Complete Guide (incl Hooks, React Router, Redux)',
        '✔ The Complete Node.js Developer Course (3rd Edition)',
        '✔ The Complete JavaScript Course 2020']
}];

const Education = () => {

    return (
        <div id="education">
            <h1 className="pt-3 text-center font-details-b pb-3">EDUCATION</h1>
            {educations.map(({ title, img, texts }, i) =>
                <Jumbotron className="jumbo-style" key={i}>
                    <Container>
                        <Tilt options={{ max: 25 }}>
                            <Card>
                                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                    <Card.Img variant="top" src={img} alt="Accenture logo" className="educationImg" />
                                </Card.Header>
                                <Card.Body className="d-flex justify-content-center flex-column">
                                    <div>
                                        <Card.Title className="text-center">{title}</Card.Title>
                                    </div>
                                    {texts.map((text, j) => <Card.Text key={j}>{text}</Card.Text>)}
                                </Card.Body>
                            </Card>
                        </Tilt>
                    </Container>
                </Jumbotron>
            )}
        </div>

    );
};

export default Education;