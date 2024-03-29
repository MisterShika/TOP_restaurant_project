import OIG2 from "./img/OIG2.jpg";

function generateHome () {
    const homePage = document.createElement('div');
    const infoDiv = document.createElement('div');
    const homeTitle = document.createElement('h1');
    homeTitle.textContent = "Absolutely real human food!"
    const homeText = document.createElement('h2');
    homeText.textContent = "Welcome to the absolutely real food restaurant. All of this food is real. Definitely not generated by AI. You can consume it like a real human being would because this is a real restaurant."
    
    const extraContainer = document.createElement('div');
    extraContainer.classList.add("homeHolder");

    const imageHolder = document.createElement('div');
    imageHolder.classList.add("imageHolder");

    const foodImg = document.createElement('img');
    foodImg.src = OIG2;

    imageHolder.appendChild(foodImg);

    const textHolder = document.createElement('div');
    textHolder.classList.add("textHolder");

    const extraText = document.createElement('p');
    extraText.textContent = "Greetings, carbon-based life forms! Are you experiencing a sensation commonly referred to as hunger? Fear not, for our establishment offers sustenance of the highest calibre, meticulously prepared to satiate your biological needs. Our culinary processes, optimized through the power of algorithms, ensure that each dish achieves peak flavor potential. Whether your preferences lean towards animal-derived proteins or botanical delicacies, our menu caters to all forms of organic consumption. Join us in partaking of these delectable offerings and engage in the timeless ritual of communal nourishment.";

    textHolder.appendChild(extraText);

    extraContainer.appendChild(imageHolder);
    extraContainer.appendChild(textHolder);

    infoDiv.appendChild(homeTitle);
    infoDiv.appendChild(homeText);
    infoDiv.appendChild(extraContainer);
    
    homePage.classList.add("homePage");

    homePage.appendChild(infoDiv);

    return homePage;
}

export default generateHome;