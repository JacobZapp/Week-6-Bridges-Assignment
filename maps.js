// where and how far are we zoomed in
// This is where the map will be
let metroAreaCenterCoordinates = [44.96, -93.2]
// Zoom level is 1 to 20
let zoomLevel = 9

// This is importing the map that we need. This is the function. College map is the div in HTML. So it id the dev
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

// Tiles are the map background. Google Maps and Apple Maps use their own things
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);