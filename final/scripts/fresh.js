const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const fruitMenu1 = document.querySelector('.fruits');
const fruitMenu2 = document.querySelector('.fruits2');
const fruitMenu3 = document.querySelector('.fruits3');


async function getDirectory() {

    let response = await fetch(requestURL);
    

    if (response.ok) {
        let data = await response.json();
        // console.log(data);
        buildList(data);
        
    } else {
        throw Error(response.statusText);
    }
}

function buildList(data) {
    data.forEach(fruit => {
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

// ---------------- Butten Event ----------------

const form = document.querySelector('form');
const orderInfo = document.querySelector('.subbmissionCard');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    
    const obj = Object.fromEntries(fd);

    const formjson = JSON.stringify(obj);
    localStorage.setItem('form', formjson);
    console.log(formjson);

    let fruit1 = JSON.parse(formjson);
    let fruit2 = JSON.parse(formjson);
    let fruit3 = JSON.parse(formjson);

    console.log(fruit1.fruit1);
    console.log(fruit2.fruit2);
    console.log(fruit3.fruit3);
    

    async function getList() {

        let response = await fetch(requestURL);
        
        if (response.ok) {
            let old = await response.json();
            let newList = old.filter(old => {
                return old.name === (fruit1.fruit1) || old.name === (fruit2.fruit2) || old.name === (fruit3.fruit3)});
            console.log(newList);
            buildCard(formjson);


        } else {
            throw Error(response.statusText);
        }
    }   

    function buildCard(formjson) {
        formjson.forEach(entry => {

        let card = document.createElement('section');
        let name = document.createElement('p');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        // let calories = document.createElement('p');
        // let carbohydrates = document.createElement('p');
        // let protein = document.createElement('p');
        // let fat = document.createElement('p');
        // let sugar = document.createElement('p');

        name.innerHTML = `${entry.fname}`;
        phone.innerHTML = `${entry.phone}`;
        email.innerHTML = `${entry.email}`;

        card.append(name);
        card.append(phone);
        card.append(email);
        orderInfo.append(card);
    });
}

getList();

});