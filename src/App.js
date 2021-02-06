import './App.css';
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container';
import BgImage from "./assets/img/parallex/background.webp";

//components
import NavbarComponent from "./components/my-navbar/navbarComponent";
import CarouselComponent from './components/my-carousel/carouselComponent';
import TitleMessage from './components/title-message/titleMessageComponent';
import About from './pages/about/aboutComponent';
import Skills from './pages/skills/skillsComponent';
import Education from './pages/education/educationComponent';
import ProjectsTimeline from './components/projects-timeline/projectsTimeline';
import Contact from './pages/contact-form/contactFormComponent';
import FooterPanel from './components/footer/footerComponent';
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      {/*Title Section */}
      <NavbarComponent />
      <CarouselComponent />
      <TitleMessage />
      <Particles
        className="particles particles-box"
        params={particlesOptions} />

      {/*About Section */}
      <div>
        <Parallax bgImage={BgImage} blur={{ min: -30, max: 30 }}
          bgImageAlt=""
          strength={-200}>
          <Container className="container-box rounded">
            <Fade left duration={800}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>

      {/*Skills Section */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={800}>
            <Skills />
          </Slide>
        </Container>
      </div>

      {/*Education Section */}
      <div>
        <Container className="container-box rounded">
          <Fade left duration={800}>
            <hr />
            <Education />
          </Fade>
        </Container>
      </div>

      {/*Projects Section */}
      <div>
        <Container className="container-box rounded">
          <hr />
          <ProjectsTimeline />
        </Container>
      </div>

      {/*Contact Section */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom>
            <hr />
            <Contact />
          </Slide>
        </Container>
      </div>
      <FooterPanel />
    </div>
  );
}

export default App;
