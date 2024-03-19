const getWainwrightsData = async() => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    const jsonData = await response.json();

    return jsonData;
}

let wainwrights;

async function main(){
    wainwrights = await getWainwrightsData();
    console.log(wainwrights);
    const wainwrightsList = document.getElementById('wainwrights-list');
    const filteredList = wainwrights.filter(element => {
        return element["name"].includes("f")
    });
    filteredList.forEach(wainwright => {
        const listItem = document.createElement('li');
        listItem.textContent = `${wainwright["name"]}, Height: ${wainwright["heightMetres"]}, Area: ${wainwright["area"]["areaName"]}`;
        wainwrightsList.appendChild(listItem);
    });
}
main();

