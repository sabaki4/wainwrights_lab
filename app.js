const getWainwrightsData = () => {
    return fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json')
        .then(response => response.json());
}