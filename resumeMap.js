//  DEFINE MAIN APPLICATION CLASS
//      FUNCTION TO CREATE MAP FRAME
//          ADD MAP OBJECT
//          ADD MAP TITLES
//          ADD DATA LAYERS
//          ADD POPUPS
//      FUNCTION CREATE RESUME FRAME
//          ADD CONTROL
//          ADD TITLE
//          ADD DESCRIPTIONS
//          ADD BUTTONS



//variables
var map_object = L.map('mapid', {closePopupOnClick: false});
var map_tile_object = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'});
var resume_markers = []
var resume_control = L.control();
var resume_control_title = '<h4>Map of Professional Experiences</h4>';
var resume_control_description = '<p>Click on position title for more information</p>';

//functions
function zoomTo(num) {
  var feature_cord = resumeData[num].geometry.coordinates;
  var markerBounds = L.latLng(feature_cord[1], feature_cord[0]);
  map_object.setView(markerBounds, 17);
  resume_markers[num].openPopup();
}

function main(map, tiles, data, resume, title, description) {
  tiles.addTo(map);
  for (x in data) {
    var popup_content =
    '<h2>' + data[x].properties.position + '</h2>' +
    '<h4>' + data[x].properties.employer + ' | ' + data[x].properties.period + '</h4>' +
    '<p>' + data[x].properties.responsibilities + '</p>';
    var marker = L.geoJSON(data[x]).bindPopup(popup_content);
    resume_markers.push(marker);
  };

  for (x in resume_markers) {
    resume_markers[x].addTo(map);
  };

  resume.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'resume');
    this._div.innerHTML = title + '<br>' + description;
    return this._div;
  };

  resume.addTo(map);
  for (var i = 0; i < resume_markers.length; ++i) {
    resume._div.innerHTML +=
      '<button onclick=zoomTo(' + i + ')>' +
      data[i].properties.position +
      '</button>';
  };

};

//execute
var app = main(
  map = map_object,
  tiles = map_tile_object,
  data = resumeData,
  resume = resume_control,
  title = resume_control_title,
  description = resume_control_description,
);
