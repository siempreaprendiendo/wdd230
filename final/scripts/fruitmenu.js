const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const fruitSelection = document.querySelector('#fruits');

async function getDirectory() {

    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        buildList(data);
    } else {
        throw Error(response.statusText)
    }
}

function buildList(data) {
    data.fruits.forEach(fruit => {
        let menu = document.createElement('option');

        menu.innerHTML = `${fruit.name}`;

        option.setAttribute('value', `${fruit.name}`);
        
        
        
    })
}

getDirectory();