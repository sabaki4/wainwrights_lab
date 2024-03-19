const getWainwrightsData = async() => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    const jsonData = await response.json();

    wainwrightsData = jsonData;

    displayWainwrights(wainwrightsData);
}

const displayWainwrights = (wainwrights) => {
    const wainwrightsList = document.getElementById('wainwrights-list');

    wainwrights.forEach(wainwright => {
        const listItem = document.createElement('li');
        listItem.textContent = `${wainwright.name}, Height: ${wainwright.height}, Area: ${wainwright.area}`;
        wainwrightsList.appendChild(listItem);
    });
}
