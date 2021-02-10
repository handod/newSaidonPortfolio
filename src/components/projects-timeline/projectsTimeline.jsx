import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";

//Projects Logos
import L_SIMPLE_WEBSITE from "../../assets/img/projects/simpleWebsiteProject.webp";
import L_VIRTUAL_FRIEND from "../../assets/img/projects/virtualFriendProject.webp";
import L_C_COMPILER from "../../assets/img/projects/compilerProject.webp";
import L_TINJEW from "../../assets/img/projects/tinJewProject.webp";
import L_DICE_ROLLER from "../../assets/img/projects/diceRollerProject.webp";
import L_DRUM_KIT from "../../assets/img/projects/dkProject.webp";
import L_SIMON_GAME from "../../assets/img/projects/simonGameProject.webp";
import L_TO_DO_LIST from "../../assets/img/projects/toDoListProject.webp";
import L_KEEPER_APP from "../../assets/img/projects/reactNoteProject.webp";
import L_Old_Portfolio from "../../assets/img/projects/oldPortfolioProject.webp";
import L_Saidon_Quoter from "../../assets/img/projects/quoteGeneratorProject.webp";
import L_Burger_Builder from "../../assets/img/projects/burgerBuilderProject.webp";


// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_JAVA from "../../assets/img/skills/java.svg";
import L_JUNIT from "../../assets/img/skills/junit.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_C from "../../assets/img/skills/c-lang.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_JQUERY from "../../assets/img/skills/jquery.svg";

import './projectsTimelineStyle.css';

const ProjectsTimeline = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    {/* Project: Burger Builder */}
                    <ImageEvent
                        date="18/05/2020"
                        className="text-center"
                        text="Burger Builder"
                        src={L_Burger_Builder}
                        alt="Burger Builder">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> React Project That Lets You Build Your Own Burger And Order It.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>React Project</li>
                                                    <li>React Router</li>
                                                    <li>Validations</li>
                                                    <li>Redux</li>
                                                    <li>Authentication</li>
                                                    <li>Testing</li>
                                                    <li>Animations</li>
                                                    <li>Hooks</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REDUX}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            React Redux
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT_BOOTSTRAP}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            React Bootstrap
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT_ROUTER}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            React Router
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_STYLED_COMPONENTS}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            Styled Components
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://handod.github.io/quote-generator/"
                                    target="_blank">
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/handod/quote-generator"
                                    target="_blank">
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Saidon Quoter */}
                    <ImageEvent
                        date="25/04/2020"
                        className="text-center"
                        text="Saidon Quoter"
                        src={L_Saidon_Quoter}
                        alt="Saidon Quoter">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> JavaScript Quote Generator Project with API Use.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Using Quotes API</li>
                                                    <li>With Loading Animation</li>
                                                    <li>Respoisive And Fun For Mobile Use</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_BOOTSTRAP4}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            Bootstrap
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://handod.github.io/quote-generator/"
                                    target="_blank">
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/handod/quote-generator"
                                    target="_blank">
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Old Portfolio */}
                    <ImageEvent
                        date="14/04/2020"
                        className="text-center"
                        text="Old Portfolio"
                        src={L_Old_Portfolio}
                        alt="Old Portfolio">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> My First Portfolio That Gathers My Previous Projects.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Using Animations</li>
                                                    <li>Built Most On JQuery</li>
                                                    <li>Respoisive And User Friendly</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_BOOTSTRAP4}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            Bootstrap
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JQUERY}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            JQuery
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://handod.github.io/DavidSaidonPortfolio/"
                                    target="_blank">
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/handod/DavidSaidonPortfolio"
                                    target="_blank">
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: React Keeper App */}
                    <ImageEvent
                        date="08/04/2020"
                        className="text-center"
                        text="React Keeper App"
                        src={L_KEEPER_APP}
                        alt="React Keeper App">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> React Project That Lets You Add and Remove Your Notes.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Using ES6</li>
                                                    <li>Using Hooks</li>
                                                    <li>Built With Animations</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            NodeJS
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://handod.github.io/saidonKeeperApp/"
                                    target="_blank">
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/handod/saidonKeeperApp"
                                    target="_blank">
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: To Do List */}
                    <ImageEvent
                        date="25/03/2020"
                        className="text-center"
                        text="To Do List"
                        src={L_TO_DO_LIST}
                        alt="To Do List">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Back-End Project With NodeJS Of To Do List.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Using EJS</li>
                                                    <li>Keeps And Holds Your To Do List</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            NodeJS
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/handod/toDoListNodeJS"
                                    target="_blank">
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Simon Game */}
                    <ImageEvent
                        date="14/03/2020"
                        className="text-center"
                        text="Simon Game"
                        src={L_SIMON_GAME}
                        alt="Simon Game">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> A Memory Game, Also Known As The "Simon Game" With JavaScript and jQuery.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>jQuery Based Project</li>
                                                    <li>Using Event Listeners</li>
                                                    <li>Using DOM</li>
                                                    <li>With Audio</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JQUERY}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            jQuery
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://handod.github.io/simonGame/"
                                    target="_blank">
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/handod/simonGame"
                                    target="_blank">
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Drum Kit */}
                    <ImageEvent
                        date="18/02/2020"
                        className="text-center"
                        text="Drum Kit"
                        src={L_DRUM_KIT}
                        alt="Drum Kit">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> JavaScript Website With Amazing Sound Effects Of Drum Kit.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Using Event Listeners</li>
                                                    <li>Using DOM</li>
                                                    <li>With Audio</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://handod.github.io/drumKitWebsite/"
                                    target="_blank">
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/handod/drumKitWebsite/"
                                    target="_blank">
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Dice Roller */}
                    <ImageEvent
                        date="03/02/2020"
                        className="text-center"
                        text="Dice Roller"
                        src={L_DICE_ROLLER}
                        alt="Dice Roller">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> JavaScript Website That Plays A Dice Game.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Using Random Logic</li>
                                                    <li>Using DOM</li>
                                                    <li>Simple Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://handod.github.io/diceWebsite/"
                                    target="_blank">
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/handod/diceWebsite"
                                    target="_blank">
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: TinJew (bootstrapped website) */}
                    <ImageEvent
                        date="15/01/2020"
                        className="text-center"
                        text="HTML & CSS With Bootstrap Website"
                        src={L_TINJEW}
                        alt="HTML & CSS With Bootstrap Website">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> HTML & CSS Website About Tinder For Jewish People.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Basic HTML and CSS</li>
                                                    <li>Respoisive Design</li>
                                                    <li>Using Bootstrap</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_BOOTSTRAP4}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            Bootstrap
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://handod.github.io/tinJewWebsite/"
                                    target="_blank">
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/handod/tinJewWebsite"
                                    target="_blank">
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: simple HTML & CSS website */}
                    <ImageEvent
                        date="07/01/2020"
                        className="text-center"
                        text="Simple HTML & CSS Website"
                        src={L_SIMPLE_WEBSITE}
                        alt="Simple HTML & CSS Website">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> My first simple HTML & CSS website.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Basic HTML and CSS</li>
                                                    <li>Respoisive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/handod/simpleHtmlCssWebsite"
                                    target="_blank">
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: C compiler */}
                    <ImageEvent
                        date="05/04/2020"
                        className="text-center"
                        text="C Compiler"
                        src={L_C_COMPILER}
                        alt="C Compiler">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Project Of C Compiler. Built During Theory Of Compilation Course.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Built In C Language</li>
                                                    <li>Using Lexical, Syntax And Semantic Analyzer</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_C}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            C Language
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/handod/c.compiler"
                                    target="_blank">
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: virtual friend */}
                    <ImageEvent
                        date="17/10/2019"
                        className="text-center"
                        text="Virtual Friend"
                        src={L_VIRTUAL_FRIEND}
                        alt="Virtual Friend">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Project That Built As Part Of Software Engineering Course. Virtual Friend For The Student.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Design Patterns Based</li>
                                                    <li>Using MVC Architecture</li>
                                                    <li>Using Swing For GUI</li>
                                                    <li>Using JUnit For Testing</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVA}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            Java
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JUNIT}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1">
                                                            </Image>{" "}
                                                            JUnit
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/handod/JavaSiteProject"
                                    target="_blank">
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                </Events>
            </Timeline>
        </div>
    );
};

export default ProjectsTimeline;