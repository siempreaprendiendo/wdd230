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
        let option = document.createElement('option');
        option.setAttribute('value', `${fruit.name}`);
        label.innerHTML = `${fruit.name}`;
        option.append(label);
        fruitMenu1.append(option);

        let label2 = document.createElement('label');
        let option2 = document.createElement('option');
        option2.setAttribute('value', `${fruit.name}`);
        label2.innerHTML = `${fruit.name}`;
        option2.append(label2);
        fruitMenu2.append(option2);

        let label3 = document.createElement('label');
        let option3 = document.createElement('option');
        option3.setAttribute('value', `${fruit.name}`);
        label3.innerHTML = `${fruit.name}`;
        option3.append(label3);
        fruitMenu3.append(option3);

    });
}

getDirectory();

// ---------------- Butten Event ----------------

const form = document.querySelector('form');
const orderInfo = document.querySelector('.submissionCard');

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

    let fname = JSON.parse(formjson);
    let phone = JSON.parse(formjson);
    let email = JSON.parse(formjson);

    async function getList() {

        let response = await fetch(requestURL);
        

        if (response.ok) {

            // ----- Create New List From Entries -----
            let old = await response.json();
            let newList = old.filter(old => {
                return old.name === (fruit1.fruit1) || old.name === (fruit2.fruit2) || old.name === (fruit3.fruit3);});
            console.log(newList);
            

            // ------ Add Carbs ------
            let totalCarbs = 0;
            newList.forEach(entry => {
                totalCarbs += entry.nutritions.carbohydrates;
            });

            // ------ Add Protein ------
            let totalProtein = 0;
            newList.forEach(entry => {
                totalProtein += entry.nutritions.protein;
            });


            // ------ Add Sugars ------
            let totalSugar = 0;

            newList.forEach(entry => {
                totalSugar += entry.nutritions.sugar;
            });

            // ------ Add Fats ------
            let totalFat = 0;

            newList.forEach(entry => {
                totalFat += entry.nutritions.fat;
            });

            // ------ Add kcals ------
            let totalKcals = 0;

            newList.forEach(entry => {
                totalKcals += entry.nutritions.calories;
            });


        } else {
            throw Error(response.statusText);
        }
    }


    function buildCard() {
        let card = document.createElement('section');
        let firstName = document.createElement('h2');
        let phoneNumber = document.createElement('p');
        let emailAddress = document.createElement('p');
        let hr = document.createElement('hr');
        let choice1 = document.createElement('p');
        let choice2 = document.createElement('p');
        let choice3 = document.createElement('p');
        // let carbs = document.createElement('p');
        // let prot = document.createElement('p');
        // let fat = document.createElement('p');
        // let sugar = document.createElement('p');
        // let kcals = document.createElement('p');

        firstName.innerHTML = `Thank You ${fname.fname}!`;
        phoneNumber.innerHTML = `Phone: ${phone.phone}`;
        emailAddress.innerHTML = `Email: ${email.email}`;
        hr.innerHTML = ``;
        choice1.innerHTML = `Fruit 1: ${fruit1.fruit1}`;
        choice2.innerHTML = `Fruit 2: ${fruit2.fruit2}`;
        choice3.innerHTML = `Fruit 3: ${fruit3.fruit3}`;
        // carbs.innerHTML = `Carbs: ${totalCarbs}`;
        // prot.innerHTML = `Protein: ${totalProtein}`;
        // fat.innerHTML = `Fat: ${totalFat}`;
        // sugar.innerHTML = `Sugar: ${totalSugar}`;
        // kcals.innerHTML = `Calories: ${totalKcals}`;
        card.setAttribute('class', `cardContent`);
        orderInfo.classList.add('submit');

        card.append(firstName);
        card.append(phoneNumber);
        card.append(emailAddress);
        card.append(hr);
        card.append(choice1);
        card.append(choice2);
        card.append(choice3);
        orderInfo.append(card);

    }
getList();
buildCard();
});