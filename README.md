# Leaflet Resume Template
#### Author
Brendan Cullen
2019

## Description
Interactive Resume Map Template using Leaflet's open-source Javascript library. Can be used to embed a resume-like webmap into a webpage. The template is added as a control div within the map object. Uses GeoJSON to display resume information.

## Configure

resumeData.js, resumeMap.js, and resumeMap.css contain the functions and styling needed to create the template. Below are snippets from the example.

### Leaflet

Follow set up instructions at [Leaflet]()

### index.html

#### head

Insert the following in the head of the document.

```
<link rel="stylesheet" type="text/css" href="resumeMap.css"/>
<script src="resumeData.js"></script>
```

#### body

Insert the following in the body of the document.

```
<div id="mapid"></div>
<script src="resumeMap.js"></script>
```

### resumeMap.js

There are two functions in resumeMap.js, resume_template() and zoomTo().

resume_template() adds the map tile object to the map, creates the popup content based off of resumeData.js, and binds it to a new marker layer. The markers are then added to the map. The control div is then created with a title and general description. Buttons are also added to the div based off of resumeData.js.

This snippet from the example shows the required inputs for resume_template().

```
var app = resume_template(
  map = map_object,
  tiles = map_tile_object,
  data = resumeData,
  resume = resume_control,
  title = resume_control_title,
  description = resume_control_description,
)
```

zoomTo() changes the view of the map when a position's button is clicked in the resume div. The coordinates are stored in resumeData.js.

### resumeMap.css

This snippet shows the styling used in the example.

```
#mapid {
  height: 600px;
  width: 900px;
  margin: auto;
}
.resume {
    width: 15vw;
    height: 500px;
    padding: 8px 8px;
    font: 10px Arial, Helvetica, sans-serif;
    background: rgba(255,255,255,0.8);
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    border-radius: 5px;
    text-align: center;
    color: grey;
    overflow: scroll;
}
.resume h4 {
    text-align: center;
    font-size: 2em;
    color: rgba(0,0,0,0.2);
}
.resume button {
  -webkit-transition-duration: 0.6s;
  transition-duration: 0.6s;
  background-color: grey;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 11px;
  width: 100%;
  border-radius: 8px;
  border: 2px solid white;
}
.resume button:hover {
  background-color: white;
  border: 2px solid grey;
  color: grey;
}
```

### resumeData.js

GeoJSON file containing the resume information. Each object is added as an individual marker and added as a button in the control div.
```
var resumeData = [{
    "type": "Feature",
    "id": "01",
    "properties": {
      "position": "Leaflet Developer",
      "employer": "Self Employed",
      "period": "Jan 19' - Present",
      "responsibilities": "Make cool web maps all day for a variety of clients."
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-83.176256, 41.114445]
    }
  },

  {
    "type": "Feature",
    "id": "02",
    "properties": {
      "position": "Delivery Expert",
      "employer": "Domino's Pizza",
      "period": "Jun 18'-Aug 18'",
      "responsibilities": "Maintain clean working environment. Deliver food in a timely and polite manner. "
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-74.32133, 41.402409]
    }
  }
];
```

## Example

[Basic Example]()

[Full Example](https://bren96.github.io/CullenCartography/#experiencemap)

## License
