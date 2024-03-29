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
    const spotlight = data.members.filter(x => x.memLvl === "Gold").sort(function(){return 0.5 - Math.random()}).slice(0,3);
    spotlight.forEach(member => {
        let img = document.createElement('img');
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let bname = document.createElement('h2');
        let address = document.createElement('p');
        let phn = document.createElement('p');
        let wbst = document.createElement('p');
        let mblv = document.createElement('p');

            name.innerHTML = `${member.name} ${member.lastName}`;
            bname.innerHTML = `<strong>${member.businessName}</storng>`;
            address.innerHTML = `📇: ${member.address}`;
            phn.innerHTML = `📞: ${member.phone}`;
            wbst.innerHTML = `${member.website}`;
            mblv.innerHTML = `Mmbr Lvl: <strong>${member.memLvl}<strong>`;
            img.setAttribute('src', `images/${member.logo}`);
            img.setAttribute('alt', `${member.alt}`);
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
