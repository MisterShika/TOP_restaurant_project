import './reset.css';
import './style.css';
import generateHome from './generateHome.js'
import generateMenu from './generateMenu.js'
import generateAbout from './generateAbout.js'

import bg from './img/bg.jpg';

const homeButton = document.getElementById('homePage');
const aboutButton = document.getElementById('aboutPage');
const menuButton = document.getElementById('menuPage');

const mainContainer = document.getElementById('content');

const clearAndPlace = (pageInfo) => {
    mainContainer.innerHTML = '';
    mainContainer.appendChild(pageInfo);
}

homeButton.addEventListener("click", () => {
    clearAndPlace(generateHome());
});
aboutButton.addEventListener("click", () => {
    clearAndPlace(generateAbout());
});
menuButton.addEventListener("click", () => {
    clearAndPlace(generateMenu());
});

clearAndPlace(generateHome());