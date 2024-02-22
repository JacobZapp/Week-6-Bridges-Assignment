// Coordinates for the map center
let mapCenter = [44, -103]
// how much to zoom in or out
let zoomLevel = 5

//L is a leaflet object, not native to Script
// Create mpa, center it, and set the zoom level
let bridgeMap = L.map("bridge-map").setView(mapCenter, zoomLevel)


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); //adding titlelayer to the bridge map


//Example of setting markers
let stPaulCoordinates = [,]
let stpMarker = L.marker(stPaulCoordinates)
    .bindPopup("Saint Paul College<br>")
    .addTo(bridgeMap)


let bridgeData = [
    {
        name:'Verrazano-Narrows Bridge',
        cityState: "New York, NY",
        span: 1298.4,
        coordinates: [40.6066, -74.0447]
    },
    {
        name:'Golden Gate Bridge',
        cityState: "San Francisco and Marin, CA",
        span: 1280.2,
        coordinates: [40.6066, -74.0447]
    },
    {
        name:'Verrazano-Narrows Bridge',
        cityState: "New York, NY",
        span: 1298.4,
        coordinates: [40.6066, -74.0447]
    },
    {
        name:'Verrazano-Narrows Bridge',
        cityState: "New York, NY",
        span: 1298.4,
        coordinates: [40.6066, -74.0447]
    },
    {
        name:'Verrazano-Narrows Bridge',
        cityState: "New York, NY",
        span: 1298.4,
        coordinates: [40.6066, -74.0447]
    },
    {
        name:'Verrazano-Narrows Bridge',
        cityState: "New York, NY",
        span: 1298.4,
        coordinates: [40.6066, -74.0447]
    },
]

bridgeData.forEach( function (bridge) {
    let bridgeCoordinates = bridge.coordinates
    letbridgeMarker = L.marker(bridgeCoordinates).addTo(bridgeMap)
    // todo create popup from data in the bridge object
})