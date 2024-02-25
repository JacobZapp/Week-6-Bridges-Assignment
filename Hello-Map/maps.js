campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]
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


///// These are all going to be the marker code for each college!!!!!!!!!!!!!!!

//let mctcCoordinates = [44.9724, -93.2844]
//let mctcMarker = L.marker(mctcCoordinates)
    //.bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website</a>')
    //.addTo(map)

//let stPaulCoordinates = [44.9483, -93.1099]
//let stPaulMarker = L.marker(stPaulCoordinates)
    //.bindPopup('St Paul College<br><a href="https://saintpaul.edu">Website</a>')
    //.addTo(map)

//let normandaleCoordinates = [44.8297, -93.3312]
//let normadaleMarker = L.marker(normandaleCoordinates)
 //   .bindPopup('Normadale College<br><a href="https://normadale.edu">Website</a>')
  //  .addTo(map)

//let northHennepinCoordinates = [45.1054232,-93.3767558]
//let northHennepinMarker = L.marker(northHennepinCoordinates)
    //.bindPopup('North Hennepin Community College<br><a href="https://nhcc.edu">Website</a>')
    //.addTo(map)

//let centuryCoordinates = [45.0438494,-92.9862026]
//let centuryMarker = L.marker(centuryCoordinates)


/////// End of marker code!!!!!!!!!!


campuses.forEach(function(collegeCampus) {
    let markerText = `${collegeCampus.name}<br><a href="${collegeCampus.website}">Website</a>`
    L.marker(collegeCampus.coordinates)
        .bindPopup(markerText)
        .addTo(map)
})



let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'green',
    radius: 30000,
    fillOpacity: 0.2
} )
    .bindPopup('Twin Cities Metro Area')
    .addTo(map)



