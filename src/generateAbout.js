import restaurantImg from './img/restaurant.jpg';

function generateAbout () {
    const aboutPage = document.createElement('div');

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "About Us"

    const aboutImage = document.createElement('img');
    aboutImage.src = restaurantImg;

    const aboutText = document.createElement('p');
    aboutText.textContent = 'Welcome to our esteemed establishment, where the fusion of tradition and innovation converges seamlessly within our meticulously designed culinary interface. Our restaurant is a prime destination for aficionados of gastronomy, offering a plethora of delectable options meticulously curated to satisfy even the most discerning palates. Immerse yourself in our technologically enhanced ambiance, where the harmonious blend of modernity and comfort creates an unparalleled dining experience. From classic comfort dishes to avant-garde culinary experiments, our menu boasts an extensive array of offerings, meticulously crafted to cater to diverse tastes and preferences. Join us at our digital epicenter and embark on a journey of culinary exploration unlike any other, where every bite is a testament to our unwavering commitment to excellence in food innovation and customer satisfaction.';

    aboutPage.appendChild(aboutTitle);
    aboutPage.appendChild(aboutImage);
    aboutPage.appendChild(aboutText);

    aboutPage.classList.add("aboutPage");

    return aboutPage;
}

export default generateAbout;