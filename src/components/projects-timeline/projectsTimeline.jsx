import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import projects from './projects';
import './projectsTimelineStyle.css';

const ProjectsTimeline = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    {projects.map(project => (
                        <ImageEvent
                            date={project.date}
                            className="text-center"
                            text={project.title}
                            src={project.img}
                            alt={project.title}>
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
                                                    <strong>Description: </strong>{project.description}
                                                    <hr />
                                                    <strong>Features:</strong>
                                                    <ul className="list-styles pt-1">
                                                        {project.features.map(feature => <li>{feature}</li>)}
                                                    </ul>
                                                    <hr />
                                                    <strong>Tech used:</strong>
                                                    <ul>
                                                        {project.techs.map(tech => (<li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={tech.skillLogo}
                                                                    alt={tech.name}
                                                                    rounded
                                                                    className="image-style m-1">
                                                                </Image>{" "}
                                                                {tech.name}
                                                            </span>
                                                        </li>))}
                                                    </ul>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                    {project.urls.map(url => (
                                        <UrlButton
                                            href={url.link}
                                            target="_blank">
                                            {url.type}
                                        </UrlButton>
                                    ))}
                                </div>
                            </div>
                        </ImageEvent>
                    ))}
                </Events>
            </Timeline>
        </div>
    );
};

export default ProjectsTimeline;