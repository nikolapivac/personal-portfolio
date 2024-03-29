import WeatherImage from "./images/weatherapp.png";
import WineImage from "./images/wineshop.png";
import MemoryImage from "./images/memory.png";
import CVImage from "./images/CV.png";
import TodoImage from "./images/Todo.png";
import PortfolioImage from "./images/portfolio.png";
import NewsImage from "./images/news.png";
import MarvelImage from "./images/marvel.png";
import ShortenImage from "./images/urlshort.png";

const projects = [
    {
        "id": 1,
        "name": "URL Shortener",
        "stack": "MERN stack (MongoDB, ReactJs, express, Node.js), shortid",
        "desc": "First full-stack app that I made on my own. User enters long URL, the server shortens it using shortid and returns it to the client.",
        "image": ShortenImage,
        "github": "https://github.com/nikolapivac/url-short",
        "live": ""
    },
    {
        "id": 2,
        "name": "News App",
        "stack": "ReactJS, News API, New York Times API",
        "desc": "News from all over the world is displayed and sorted into categories. Users can search for articles and bookmark their favorites. The Latest News widget is an 'infinite scroll' component.",
        "image": NewsImage,
        "github": "https://github.com/nikolapivac/news-app",
        "live": "https://nikolapivac.github.io/news-app/"
    },
    {
        "id": 3,
        "name": "Marvel App",
        "stack": "ReactJS, Marvel API",
        "desc": "Users can search for their favorite Marvel Comics characters and bookmark them. I implemented the bookmark feature by using useContext and custom hooks. Also, this was my first time implementing pagination.",
        "image": MarvelImage,
        "github": "https://github.com/nikolapivac/marvel-app",
        "live": "https://nikolapivac.github.io/marvel-app/"
    },
    {
        "id": 4,
        "name": "Weather App",
        "stack": "ReactJS, OpenWeather API",
        "desc": "Users can search for any location in the world and get current weather information and a 5-day forecast. The background image changes based on the weather.",
        "image": WeatherImage,
        "github": "https://github.com/nikolapivac/weather-react",
        "live": "https://nikolapivac.github.io/weather-react/"
    },
    {
        "id": 5,
        "name": "Wine Store Shopping Cart App",
        "stack": "ReactJS",
        "desc": "Users can select from a variety of wines and add them to cart. Payment is not implemented.",
        "image": WineImage,
        "github": "https://github.com/nikolapivac/shopping-cart",
        "live": "https://nikolapivac.github.io/shopping-cart/"
    },
    {
        "id": 6,
        "name": "The Office Memory Card Game",
        "stack": "ReactJS",
        "desc": "This one was fun to make. The player has to click on a different character each round. The player can see their current and high score.",
        "image": MemoryImage,
        "github": "https://github.com/nikolapivac/memory-card",
        "live": "https://nikolapivac.github.io/memory-card/"
    },
    {
        "id": 7,
        "name": "CV Application",
        "stack": "ReactJS",
        "desc": "Users can enter their general info, educational and practical experiences and get a nicely formed CV as a result.",
        "image": CVImage,
        "github": "https://github.com/nikolapivac/cv-app",
        "live": "https://nikolapivac.github.io/cv-app/"
    },
    {
        "id": 8,
        "name": "Personal Portfolio",
        "stack": "ReactJS, Sass",
        "desc": "You're on this site right now! I built this in React to practice working with components and using Sass.",
        "image": PortfolioImage,
        "github": "https://github.com/nikolapivac/personal-portfolio",
        "live": "/"
    },
    {
        "id": 9,
        "name": "To-Do List App",
        "stack": "ReactJS",
        "desc": "Every beginner probably has this in their portfolio. Simple To-Do list where users can add and delete tasks.",
        "image": TodoImage,
        "github": "https://github.com/nikolapivac/todo-list-app",
        "live": "https://nikolapivac.github.io/todo-list-app/"
    }
]

export default projects;