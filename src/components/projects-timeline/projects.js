//Projects Logos
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
import L_Weather_App from "../../assets/img/projects/weatherProject.webp";
import L_Chat_App from "../../assets/img/projects/chatApp.webp";
import L_Guess_Number from "../../assets/img/projects/guessNumberProject.webp";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
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
import L_EXPRESS from "../../assets/img/skills/express.svg";

const projects = [{
    title: 'Guess Saidon Number',
    img: L_Guess_Number,
    date: '11/03/2021',
    description: 'Simple And Small JavaScript App That Lets You Guess A Secret Random Number.',
    features: ['JavaScript', 'DOM', 'HTML', 'CSS'],
    techs: [{
        name: 'HTML5',
        skillLogo: L_HTML5,
    }, {
        name: 'CSS3',
        skillLogo: L_CSS3,
    }, {
        name: 'JavaScript',
        skillLogo: L_JAVASCRIPT,
    }],
    urls: [{
        link: 'https://handod.github.io/guessMyNumber/',
        type: 'SEE LIVE'
    },
    {
        link: 'https://github.com/handod/guessMyNumber',
        type: 'SOURCE CODE'
    }]
},{
    title: 'Chat App',
    img: L_Chat_App,
    date: '04/02/2021',
    description: 'Cool Node Room Chat App Project That Lets You To Communicate With Your Friends Online.',
    features: ['NodeJS', 'JQuery', 'Express'],
    techs: [{
        name: 'HTML5',
        skillLogo: L_HTML5,
    }, {
        name: 'CSS3',
        skillLogo: L_CSS3,
    }, {
        name: 'JavaScript',
        skillLogo: L_JAVASCRIPT,
    }, {
        name: 'NodeJS',
        skillLogo: L_NODE_JS,
    },{
        name: 'Express',
        skillLogo: L_EXPRESS
    },
    {
        name: 'Jquery',
        skillLogo: L_JQUERY
    }],
    urls: [{
        link: 'https://saidon-chat-app.herokuapp.com/',
        type: 'SEE LIVE'
    },
    {
        link: 'https://github.com/handod/SaidonChatApp',
        type: 'SOURCE CODE'
    }]
}, {
    title: 'Weather App',
    img: L_Weather_App,
    date: '04/12/2020',
    description: 'Simple Node Project That Lets You Get Information On the Current Weather In Your Location.',
    features: ['NodeJS', 'Partials', 'RESTful API'],
    techs: [{
        name: 'HTML5',
        skillLogo: L_HTML5,
    }, {
        name: 'CSS3',
        skillLogo: L_CSS3,
    }, {
        name: 'JavaScript',
        skillLogo: L_JAVASCRIPT,
    }, {
        name: 'NodeJS',
        skillLogo: L_NODE_JS,
    }],
    urls: [{
        link: 'https://saidon-weather-app.herokuapp.com/',
        type: 'SEE LIVE'
    },
    {
        link: 'https://github.com/handod/weather-website',
        type: 'SOURCE CODE'
    }]
}, {
    title: 'Burger Builder',
    img: L_Burger_Builder,
    date: '18/07/2020',
    description: 'React Project That Lets You Build Your Own Burger And Order It.',
    features: ['React Project', 'React Router', 'Validations', 'Redux', 'Authentication', 'Testing', 'Animations', 'Hooks'],
    techs: [{
        name: 'HTML5',
        skillLogo: L_HTML5,
    }, {
        name: 'CSS3',
        skillLogo: L_CSS3,
    }, {
        name: 'JavaScript',
        skillLogo: L_JAVASCRIPT,
    }, {
        name: 'React',
        skillLogo: L_REACT,
    }, {
        name: 'Redux',
        skillLogo: L_REDUX,
    }, {
        name: 'React Bootstrap',
        skillLogo: L_REACT_BOOTSTRAP,
    }, {
        name: 'React Router',
        skillLogo: L_REACT_ROUTER,
    }, {
        name: 'Styled Components',
        skillLogo: L_STYLED_COMPONENTS,
    }],
    urls: [{
        link: 'https://react-my-burger-saidon.web.app/',
        type: 'SEE LIVE'
    },
    {
        link: 'https://github.com/handod/burgerBuilder',
        type: 'SOURCE CODE'
    }]
}, {
    title: 'Saidon Quoter',
    img: L_Saidon_Quoter,
    date: '25/04/2020',
    description: 'JavaScript Quote Generator Project with API Use.',
    features: ['Using Quotes API',
        'With Loading Animation',
        'Respoisive And Fun For Mobile Use'],
    techs: [{
        name: 'HTML5',
        skillLogo: L_HTML5,
    }, {
        name: 'CSS3',
        skillLogo: L_CSS3,
    }, {
        name: 'JavaScript',
        skillLogo: L_JAVASCRIPT,
    }, {
        name: 'Bootstrap',
        skillLogo: L_BOOTSTRAP4,
    }],
    urls: [{
        link: 'https://handod.github.io/quote-generator/',
        type: 'SEE LIVE'
    },
    {
        link: 'https://github.com/handod/quote-generator',
        type: 'SOURCE CODE'
    }]
}, {
    title: 'Old Portfolio',
    img: L_Old_Portfolio,
    date: '14/04/2020',
    description: 'My First Portfolio That Gathers My Previous Projects.',
    features: ['Using Animations',
        'Built Most On JQuery',
        'Respoisive And User Friendly'],
    techs: [{
        name: 'HTML5',
        skillLogo: L_HTML5,
    }, {
        name: 'CSS3',
        skillLogo: L_CSS3,
    }, {
        name: 'JavaScript',
        skillLogo: L_JAVASCRIPT,
    }, {
        name: 'Bootstrap',
        skillLogo: L_BOOTSTRAP4,
    }, {
        name: 'JQuery',
        skillLogo: L_JQUERY,
    }],
    urls: [{
        link: 'https://handod.github.io/DavidSaidonPortfolio/',
        type: 'SEE LIVE'
    },
    {
        link: 'https://github.com/handod/DavidSaidonPortfolio',
        type: 'SOURCE CODE'
    }]
}, {
    title: 'React Keeper App',
    img: L_KEEPER_APP,
    date: '08/04/2020',
    description: 'React Project That Lets You Add and Remove Your Notes.',
    features: ['Using ES6',
        'Using Hooks',
        'Built With Animations'],
    techs: [{
        name: 'HTML5',
        skillLogo: L_HTML5,
    }, {
        name: 'CSS3',
        skillLogo: L_CSS3,
    }, {
        name: 'JavaScript',
        skillLogo: L_JAVASCRIPT,
    }, {
        name: 'NodeJS',
        skillLogo: L_NODE_JS,
    }],
    urls: [
        {
            link: 'https://github.com/handod/saidonKeeperApp',
            type: 'SOURCE CODE'
        }]
}, {
    title: 'To Do List',
    img: L_TO_DO_LIST,
    date: '25/03/2020',
    description: 'Back-End Project With NodeJS Of To Do List.',
    features: ['Using EJS',
        'Keeps And Holds Your To Do List'],
    techs: [{
        name: 'HTML5',
        skillLogo: L_HTML5,
    }, {
        name: 'CSS3',
        skillLogo: L_CSS3,
    }, {
        name: 'JavaScript',
        skillLogo: L_JAVASCRIPT,
    }, {
        name: 'NodeJS',
        skillLogo: L_NODE_JS,
    }],
    urls: [
        {
            link: 'https://github.com/handod/toDoListNodeJS',
            type: 'SOURCE CODE'
        }]
}, {
    title: 'Simon Game',
    img: L_SIMON_GAME,
    date: '14/03/2020',
    description: 'A Memory Game, Also Known As The "Simon Game" With JavaScript and jQuery.',
    features: ['jQuery Based Project',
        'Using Event Listeners',
        'Using DOM',
        'With Audio'],
    techs: [{
        name: 'HTML5',
        skillLogo: L_HTML5,
    }, {
        name: 'CSS3',
        skillLogo: L_CSS3,
    }, {
        name: 'JavaScript',
        skillLogo: L_JAVASCRIPT,
    }, {
        name: 'JQuery',
        skillLogo: L_JQUERY,
    }],
    urls: [
        {
            link: 'https://handod.github.io/simonGame/',
            type: 'SEE LIVE'
        }, {
            link: 'https://github.com/handod/simonGame',
            type: 'SOURCE CODE'
        }]
}, {
    title: 'Drum Kit',
    img: L_DRUM_KIT,
    date: '18/02/2020',
    description: 'JavaScript Website With Amazing Sound Effects Of Drum Kit.',
    features: ['Using Event Listeners',
        'Using DOM',
        'With Audio'],
    techs: [{
        name: 'HTML5',
        skillLogo: L_HTML5,
    }, {
        name: 'CSS3',
        skillLogo: L_CSS3,
    }, {
        name: 'JavaScript',
        skillLogo: L_JAVASCRIPT,
    }],
    urls: [
        {
            link: 'https://handod.github.io/drumKitWebsite/',
            type: 'SEE LIVE'
        }, {
            link: 'https://github.com/handod/drumKitWebsite/',
            type: 'SOURCE CODE'
        }]
}, {
    title: 'Dice Roller',
    img: L_DICE_ROLLER,
    date: '03/02/2020',
    description: 'JavaScript Website That Plays A Dice Game.',
    features: ['Using Random Logic',
        'Using DOM',
        'Simple Design'],
    techs: [{
        name: 'HTML5',
        skillLogo: L_HTML5,
    }, {
        name: 'CSS3',
        skillLogo: L_CSS3,
    }, {
        name: 'JavaScript',
        skillLogo: L_JAVASCRIPT,
    }],
    urls: [
        {
            link: 'https://handod.github.io/diceWebsite/',
            type: 'SEE LIVE'
        }, {
            link: 'https://github.com/handod/diceWebsite',
            type: 'SOURCE CODE'
        }]
}, {
    title: 'HTML & CSS With Bootstrap Website',
    img: L_TINJEW,
    date: '15/01/2020',
    description: 'HTML & CSS Website About Tinder For Jewish People.',
    features: ['Basic HTML and CSS',
        'Respoisive Design',
        'Using Bootstrap'],
    techs: [{
        name: 'HTML5',
        skillLogo: L_HTML5,
    }, {
        name: 'CSS3',
        skillLogo: L_CSS3,
    }, {
        name: 'Bootstrap',
        skillLogo: L_BOOTSTRAP4,
    }],
    urls: [
        {
            link: 'https://handod.github.io/tinJewWebsite/',
            type: 'SEE LIVE'
        }, {
            link: 'https://github.com/handod/tinJewWebsite',
            type: 'SOURCE CODE'
        }]
}, {
    title: 'C Compiler',
    img: L_C_COMPILER,
    date: '05/04/2020',
    description: 'Project Of C Compiler. Built During Theory Of Compilation Course.',
    features: ['Built In C Language',
        'Using Lexical, Syntax And Semantic Analyzer'],
    techs: [{
        name: 'C Language',
        skillLogo: L_C,
    }],
    urls: [
        {
            link: 'https://github.com/handod/c.compiler',
            type: 'SOURCE CODE'
        }]
}, {
    title: 'Virtual Friend',
    img: L_VIRTUAL_FRIEND,
    date: '17/10/2019',
    description: 'Project That Built As Part Of Software Engineering Course. Virtual Friend For The Student.',
    features: ['Design Patterns Based',
        'Using MVC Architecture',
        'Using Swing For GUI',
        'Using JUnit For Testing',],
    techs: [{
        name: 'Java',
        skillLogo: L_JAVA,
    }, {
        name: 'JUnit',
        skillLogo: L_JUNIT,
    }],
    urls: [
        {
            link: 'https://github.com/handod/JavaSiteProject',
            type: 'SOURCE CODE'
        }]
}];

export default projects;