import WeatherImage from "./images/weatherapp.png";
import WineImage from "./images/wineshop.png";
import MemoryImage from "./images/memory.png";
import CVImage from "./images/CV.png";
import TodoImage from "./images/Todo.png";
import LibraryImage from "./images/library.png";
import CalcImage from "./images/calculator.png";
import PortfolioImage from "./images/portfolio.png";
import NewsImage from "./images/news.png";
import MarvelImage from "./images/marvel.png";

const projects = [
    {
        "id": 1,
        "name": "News App",
        "stack": "HTML, CSS, JavaScript, ReactJS, News API, New York Times API",
        "desc": "News from all over the world is displayed and sorted into categories. Users can search for articles and bookmark their favorites.",
        "image": NewsImage,
        "github": "https://github.com/nikolapivac/news-app",
        "live": "https://nikolapivac.github.io/news-app/"
    },
    {
        "id": 2,
        "name": "Marvel App",
        "stack": "HTML, CSS, JavaScript, ReactJS, Marvel API",
        "desc": "Users can search for their favorite Marvel Comics characters and bookmark them.",
        "image": MarvelImage,
        "github": "https://github.com/nikolapivac/marvel-app",
        "live": "https://nikolapivac.github.io/marvel-app/"
    },
    {
        "id": 3,
        "name": "Weather App",
        "stack": "HTML, CSS, JavaScript, OpenWeather API",
        "desc": "Users can search for any location in the world and get current weather information and a 5-day forecast. The background image changes based on the weather.",
        "image": WeatherImage,
        "github": "https://github.com/nikolapivac/weather-app",
        "live": "https://nikolapivac.github.io/weather-app/"
    },
    {
        "id": 4,
        "name": "Wine Store Shopping Cart App",
        "stack": "ReactJS",
        "desc": "Users can select from a variety of wines and add them to cart. Payment is not implemented.",
        "image": WineImage,
        "github": "https://github.com/nikolapivac/shopping-cart",
        "live": "https://nikolapivac.github.io/shopping-cart/"
    },
    {
        "id": 5,
        "name": "The Office Memory Card Game",
        "stack": "ReactJS",
        "desc": "User has to click on a different character each round. The user can see their current and high score.",
        "image": MemoryImage,
        "github": "https://github.com/nikolapivac/memory-card",
        "live": "https://nikolapivac.github.io/memory-card/"
    },
    {
        "id": 6,
        "name": "CV Application",
        "stack": "ReactJS",
        "desc": "Users can enter their general info, educational and practical experiences and get a nicely formed CV as a result.",
        "image": CVImage,
        "github": "https://github.com/nikolapivac/cv-app",
        "live": "https://nikolapivac.github.io/cv-app/"
    },
    {
        "id": 7,
        "name": "Personal Portfolio",
        "stack": "ReactJS, Sass",
        "desc": "You're on this site right now! I built this in React to practice working with components and using Sass.",
        "image": PortfolioImage,
        "github": "https://github.com/nikolapivac/personal-portfolio",
        "live": "/"
    },
    {
        "id": 8,
        "name": "Todo List App",
        "stack": "HTML, CSS, JavaScript",
        "desc": "Simple todo list where users can add independent todos or group them in projects. Todos can be checked off the list, expanded (in order to see details) and deleted.",
        "image": TodoImage,
        "github": "https://github.com/nikolapivac/todo-list",
        "live": "https://nikolapivac.github.io/todo-list/"
    },
    {
        "id": 9,
        "name": "Local Library",
        "stack": "Node.js, Express, Pug, MongoDB, Heroku",
        "desc": "Users can create, read, update and delete authors, books, book instances and book genres.",
        "image": LibraryImage,
        "github": "https://github.com/nikolapivac/local-library",
        "live": "https://stormy-mountain-77049.herokuapp.com/catalog"
    },
    {
        "id": 10,
        "name": "Calculator",
        "stack": "HTML, CSS, JavaScript",
        "desc": "Performs basic operations - addition, subtraction, multiplication and division.",
        "image": CalcImage,
        "github": "https://github.com/nikolapivac/calculator",
        "live": "https://nikolapivac.github.io/calculator/"
    }
]

export default projects;