
// ----- Map Java -----

function initMap() {

    const carlsbad = { lat: 33.1581, lng: -117.3506 };
    // The map, centered at Carlsbad
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: carlsbad,
    });
    // The marker, positioned at Carlsbad
    const marker = new google.maps.Marker({
      position: carlsbad,
      map: map,
    });
  }
  
  window.initMap = initMap;

  