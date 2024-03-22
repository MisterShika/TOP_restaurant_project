import sticks from './img/sticks.jpg';
import wings from './img/wings.jpg';
import cheeseburger from './img/cheeseburger.jpg';
import salmon from './img/salmon.jpg';
import lemonade from './img/lemonade.jpg';
import water from './img/water.jpg';

function generateMenu () {
    const menuPage = document.createElement('div');

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Menu";

    menuPage.appendChild(menuTitle);
    
    const listCreate = (listName) => {
        let listObject = document.createElement('div');
        let listTitle = document.createElement('h2');

        listTitle.textContent = listName;

        let theList = document.createElement('ul');

        const addItem = (item, description, img) => {
            let liItem = document.createElement('li');
            let liDesc = document.createElement('span');
            let imgContainer = document.createElement('div');
            let liImg = document.createElement('img');

            liImg.src = img;

            liDesc.textContent = `${item}: ${description}`;

            imgContainer.appendChild(liImg);
            liItem.appendChild(imgContainer);
            liItem.appendChild(liDesc);

            theList.appendChild(liItem);
        }

        listObject.appendChild(listTitle);

        listObject.appendChild(theList);

        const printList = () => listObject;

        return {printList, addItem};
    }
    
    const shortDesc = document.createElement('p');
    shortDesc.textContent = 'Based on common culinary knowledge and typical menu items found in many restaurants, here are some generic foods that our establishment offers:';
    menuPage.appendChild(shortDesc);

    const appetizers = listCreate('Appetizers');

    appetizers.addItem('Mozzarella Sticks', 'Delight in elongated blobs of cheese encased in a crunchy outer shell, guaranteed to make your taste receptors sing.', sticks);
    appetizers.addItem('Chicken Wings', 'Enjoy our crispy bird appendages, served with a tangy liquid accompaniment for dipping.', wings)

    menuPage.appendChild(appetizers.printList());

    const entrees = listCreate('Entrees');

    entrees.addItem('Cheeseburger', 'Sink your teeth into a stack of greasy patties sandwiched between two pieces of carbohydrate-rich sponge, topped with melted dairy slices and various plant extracts.', cheeseburger);
    entrees.addItem('Grilled Salmon', 'Delve into a slab of aquatic vertebrate flesh, cooked to a rubbery consistency and served with a side of wilted foliage.', salmon);

    menuPage.appendChild(entrees.printList());

    const drinks = listCreate('Drinks');

    drinks.addItem('Lemonade', 'Taste the cloying sweetness of diluted citrus juice, served over a mound of ice cubes.', lemonade);
    drinks.addItem('Water', 'Hydrate yourself with a plastic vessel filled with tasteless liquid extracted from unknown sources.', water)

    menuPage.appendChild(drinks.printList());

    menuPage.classList.add("menuPage");

    return menuPage;
}

export default generateMenu;