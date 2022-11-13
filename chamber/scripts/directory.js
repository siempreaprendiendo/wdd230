const requestURL = "https://siempreaprendiendo.github.io/wdd230/chamber/json/data.json";
const cards = document.querySelector('.members');

async function getDirectory() {

    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();
        // console.log(data);
        buildCards(data);

    } else {
        throw Error(response.statusText);
    }
}

function buildCards(data) {
    data.members.forEach(member => {
        let img = document.createElement('img');
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let bname = document.createElement('h2')
        let address = document.createElement('p');
        let phn = document.createElement('p');
        let wbst = document.createElement('p');
        let mblv = document.createElement('p');
        

        name.innerHTML = `${member.name} ${member.lastName}`;
        bname.innerHTML = `<strong>${member.businessName}</storng>`;
        address.innerHTML = `Adress: ${member.address}`;
        phn.innerHTML = `Phone #: ${member.phone}`;
        wbst.innerHTML = `${member.website}`;
        mblv.innerHTML = `Member Level: <strong>${member.memLvl}<strong>`;
        img.setAttribute('src', `images/${member.logo}`);
        img.setAttribute('alt', `${member.businessName}`);
        img.setAttribute('loading', 'lazy');
        
        card.append(img);
        card.append(bname);
        card.append(name);
        card.append(address);
        card.append(phn);
        card.append(wbst);
        card.append(mblv);
        cards.append(card);
        
    });
}

getDirectory();

// ----------buttons------------ 

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".members")


gridbutton.addEventListener("click", () => {
  display.classList.remove("list");
  display.classList.add("members")
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("members")
}

