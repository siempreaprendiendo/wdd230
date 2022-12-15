// Hamburger button javascript

const menuClosed = document.querySelector('#menuArea');
const menuList = document.querySelector('#primaryNav');
const menuButton = document.querySelector('.menuBtn');
let menuOpen = false;
menuButton.addEventListener('click', () => {
    if(!menuOpen) {
        menuButton.classList.add('open');
        menuList.classList.add('open');
        menuClosed.classList.add('open');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        menuList.classList.remove('open');        
        menuClosed.classList.remove('open');
        menuOpen = false;
    }
});

//  Date 

document.getElementById("dateMod").innerHTML = `Last Modified: ${document.lastModified}`;
document.getElementById("year").innerText = new Date().getFullYear();
const dateElement = document.querySelector(".date");

function formatDate(date) {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    return `${DAYS[date.getDay()]}, ${
      MONTHS[date.getMonth()]
    } ${date.getDate()} ${date.getFullYear()}`;
  }
  
  setInterval(() => {
    const now = new Date();
    dateElement.textContent = formatDate(now);
    
  }, 200);