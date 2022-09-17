document.getElementById("date").innerHTML = `Last Updated: ${document.lastModified}`;
document.getElementById("year").innerText = new Date().getFullYear();

// -------------- Date --------------
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "day" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;