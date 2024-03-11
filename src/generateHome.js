function generateHome () {
    const homePage = document.createElement('div');
    homePage.innerHTML = `
        <p>Home Test</p>
    `;
    return homePage;
}

export default generateHome;