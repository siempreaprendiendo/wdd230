document.getElementById("dateMod").innerHTML = `Last Modified: ${document.lastModified}`;
document.getElementById("year").innerText = new Date().getFullYear();

// Hamburger button javascript

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn') 
x.onclick = toggleMenu;

// -------------- Date --------------
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "day" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;




