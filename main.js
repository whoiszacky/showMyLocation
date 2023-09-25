let x = document.getElementById("demo");
let mapElement = document.getElementById("map");
let map;


function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

    // Create a new map using Leaflet.js
    map = L.map(mapElement).setView([position.coords.latitude, ""+ position.coords.longitude], 13);
    var circle = L.circle([position.coords.latitude, position.coords.longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 50
    }).addTo(map);

    /* add conten ot text to the map*/
    var popup = L.popup()
    .setLatLng([position.coords.latitude, position.coords.longitude])
    .setContent("Man you cant hide anymore <br>you are some where here.")
    .openOn(map);

    // Add a tile layer from OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    // Create a marker for the current position
    L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);

}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}