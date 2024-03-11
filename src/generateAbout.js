function generateAbout () {
    const aboutPage = document.createElement('div');
    aboutPage.innerHTML = `
        <p>About Test</p>
    `;
    return aboutPage;
}

export default generateAbout;