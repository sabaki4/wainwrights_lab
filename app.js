const getWainwrightsData = async() => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    const jsonData = await response.json();

    return jsonData;
}

let wainwrights;

async function main(){
    wainwrights = await getWainwrightsData();
    console.log(wainwrights);
    displayWainwrights(wainwrights);
}
main();

function displayWainwrights(wainwrights) {
    const wainwrightsList = document.getElementById('wainwrights-list');
    wainwrightsList.innerHTML = ''; // Clear existing list

    wainwrights.forEach(wainwright => {
        const listItem = document.createElement('li');
        listItem.textContent = `${wainwright["name"]}, Height: ${wainwright["heightMetres"]}, Area: ${wainwright["area"]["areaName"]}`;
        wainwrightsList.appendChild(listItem);
    });
}

async function filterWainwrights(event) {
    event.preventDefault(); // Prevent form submission
    const searchTerm = document.getElementById("filter-input").value.toLowerCase();
    const filteredList = wainwrights.filter(element => {
        return element["name"].toLowerCase().includes(searchTerm);
    });
    displayWainwrights(filteredList);
}

document.getElementById('filter-form').addEventListener('submit', filterWainwrights);

