var centerAnthropicArea;

var centerAnthropicAreaCoordinates = [
  {lat: -15.88384687680409, lng: -47.8370475769043},
  {lat: -15.885250282172603, lng: -47.83722996711731},
  {lat: -15.886003576607898, lng: -47.83720850944519},
  {lat: -15.8862821916439, lng: -47.835363149642944},
  {lat: -15.886498891960885, lng: -47.834086418151855},
  {lat: -15.886344106043982, lng: -47.83253073692322},
  {lat: -15.88451762323735, lng: -47.83299207687378},
  {lat: -15.882649846848302, lng: -47.83352851867676},
  {lat: -15.882618889082638, lng: -47.83465504646301},
  {lat: -15.882869130885512, lng: -47.83470332622528},
  {lat: -15.883702408049071, lng: -47.83475160598755},
  {lat: -15.883717886849208, lng: -47.83474087715149},
  {lat: -15.883764323242485, lng: -47.835862040519714},
  {lat: -15.884084218105134, lng: -47.836334109306335},
  {lat: -15.88435251663032, lng: -47.83672034740448},
  {lat: -15.884192569475648, lng: -47.83688127994537},
  {lat: -15.884120335235131, lng: -47.83704221248627},
  {lat: -15.884120335235131, lng: -47.83714413642883},
];

var centerAnthropicAreaColor = '#87B591';

function addCenterAnthropicArea(){

  centerAnthropicArea = createVegetation(centerAnthropicAreaCoordinates,
                                        centerAnthropicAreaColor);

  centerAnthropicArea.setMap(map);
}

