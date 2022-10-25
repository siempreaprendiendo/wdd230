// Banner javascript

let d = new Date().getDay();

const banner = document.getElementById("banner")        
  if (d === 4 || d === 5) {
      banner.style.display = "block";
    }

