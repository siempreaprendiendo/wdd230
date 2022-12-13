const requestURL = "https://siempreaprendiendo.github.io/wdd230/final/json/fruits.json";
const fruitMenu1 = document.querySelector('.fruits');
const fruitMenu2 = document.querySelector('.fruits2');
const fruitMenu3 = document.querySelector('.fruits3');


async function getDirectory() {

    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        buildList(data);
    } else {
        throw Error(response.statusText);
    }
}

function buildList(data) {
    data.fruits.forEach(fruit => {
        let label = document.createElement('label');
        let option = document.createElement("option");
        option.setAttribute('value', `${fruit.name}`);
        label.innerHTML = `${fruit.name}`;
        option.append(label);
        fruitMenu1.append(option);

        let label2 = document.createElement('label');
        let option2 = document.createElement("option");
        option2.setAttribute('value', `${fruit.name}`);
        label2.innerHTML = `${fruit.name}`;
        option2.append(label2);
        fruitMenu2.append(option2);

        let label3 = document.createElement('label');
        let option3 = document.createElement("option");
        option3.setAttribute('value', `${fruit.name}`);
        label3.innerHTML = `${fruit.name}`;
        option3.append(label3);
        fruitMenu3.append(option3);

    });
}

getDirectory();


