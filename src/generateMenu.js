function generateMenu () {
    const menuPage = document.createElement('div');
    menuPage.innerHTML = `
        <p>Menu Test</p>
    `;
    return menuPage;
}

export default generateMenu;