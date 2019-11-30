# Leaflet Resume Template
#### Author
Brendan Cullen
2019

## Description
Interactive Resume Map Template using Leaflet's open-source Javascript library.
Can be used to embed a resume-like webmap into a webpage. The template is added
as a control div within the map object. Uses GeoJSON to display resume information.

## Configure

### Leaflet

Follow set up instructions at [Leaflet]()

### index.html

#### head

```
<link rel="stylesheet" type="text/css" href="resumeMap.css"/>
<script src="resumeData.js"></script>
```

#### body
```
<div id="mapid"></div>
<script src="resumeMap.js"></script>
```

### resumeMap

#### Styling


#### Script

```

var map_object = L.map('mapid', {closePopupOnClick: false});
var map_tile_object = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'});
var resume_markers = []
var resume_control = L.control();
var resume_control_title = '<h4>Map of Professional Experiences</h4>';
var resume_control_description = '<p>Click on position title for more information</p>';

var app = main(
  map = map_object,
  tiles = map_tile_object,
  data = resumeData,
  resume = resume_control,
  title = resume_control_title,
  description = resume_control_description,
)
```


### resumeData

## Example

## License
