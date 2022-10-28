//discovery page javascript

// initialize display elements
const dayDisplay = document.querySelector(".timeElapse");
const visitsDisplay = document.querySelector(".visits");


// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let milsec = Number(window.localStorage.getItem("mills-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// Show the number of days since last visit if milliseconds does not = 0

if (milsec !== 0) {
	let days = Math.round((Date.now() - milsec) / 86400000);
	let hrs = Math.round((Date.now() - milsec) / 36000000);
	let mins = Math.round((Date.now() - milsec) / 60000);
	
	dayDisplay.innerHTML = `${days} days: ${hrs} hours: ${mins} minutes.`;

} else {
	dayDisplay.textContent = `This is your first visit`;
}

// store date in number os milliseconds

milsec = Date.now();
localStorage.setItem("mills-ls", milsec);


