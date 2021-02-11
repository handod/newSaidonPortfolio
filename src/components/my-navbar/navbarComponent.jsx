import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/icons/logow.jpg';
import './navbarStyle.css';

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;

const NavbarComponent = () => {

  const [showNavbar, setShowNavbar] = useState(true)
  const [scrollPos, setScrollPos] = useState(0)

  const handleScroll  =() =>{
    setScrollPos(document.body.getBoundingClientRect().top)
    setShowNavbar(document.body.getBoundingClientRect().top > scrollPos)
  };

  let navDisplay = showNavbar? "active": "hidden"
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return ()=>{
      window.removeEventListener("scroll", handleScroll);
    }   
  });

    return (
        <Transition>
        <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className={`nav-theme justify-content-between ${navDisplay}`}>
  <Navbar.Brand href="#home">
      <img className="logo" src={Logo} alt='Saidon Portfolio Logo' />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggler" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#education">Education</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
 
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </Transition>
    )
}

export default NavbarComponent;