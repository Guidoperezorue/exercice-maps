// Initialize and add the map
function initMap() {
    // The location of Uluru
    const centro = { lat: 15, lng: 0};
    const iceland = { lat: 64.684, lng: -19.248}
    const buenosAires =  { lat: -34.626, lng: -58.523}
    const croatia = { lat: 44.367, lng: 11.919}
    
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 1.5,
      center: centro,
    });
    // The marker, positioned at Uluru
    const marker1 = new google.maps.Marker({
      position: iceland,
      map: map,
    });
    const marker2 = new google.maps.Marker({
        position: buenosAires,
        map: map,
    })
    const marker3 = new google.maps.Marker({
        position: croatia,
        map: map,
    })

    
  }
  
  window.initMap = initMap;