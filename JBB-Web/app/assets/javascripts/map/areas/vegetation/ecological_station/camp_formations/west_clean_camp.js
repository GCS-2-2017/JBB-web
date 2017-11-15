var westCleanCamp;

var westCleanCampCoordinates = [
  {lat: -15.87952194184633, lng: -47.86362526941957},
  {lat: -15.879372310277539, lng: -47.86383448172273},
  {lat: -15.87918656058923, lng: -47.8639364056653},
  {lat: -15.878959532959769, lng: -47.86400077868166},
  {lat: -15.8787737828908, lng: -47.864016871935746},
  {lat: -15.878618991035788, lng: -47.864016871935746},
  {lat: -15.878412601710743, lng: -47.86411879587831},
  {lat: -15.87808811141735, lng: -47.864300003293465},
  {lat: -15.877830124048057, lng: -47.86446093583436},
  {lat: -15.877581452545966, lng: -47.864609207035755},

  {lat: -15.877354852943306, lng: -47.864789348132035},
  {lat: -15.878055433140492, lng: -47.86637421704654},

  {lat: -15.878684921036974, lng: -47.86785479642276},
  {lat: -15.879087379480815, lng: -47.86867018796329},
  {lat: -15.87959303125755, lng: -47.8693568334711},
  {lat: -15.880003513851804, lng: -47.86988727697462},
  {lat: -15.880003513851804, lng: -47.86988727697462},
  {lat: -15.880602037584188, lng: -47.86975853094191},
  {lat: -15.880746508563444, lng: -47.86945812353224},
  {lat: -15.88091161812712, lng: -47.868857308712904},
  {lat: -15.881530777785333, lng: -47.868342324582045},
  {lat: -15.881922911250948, lng: -47.86799900182814},
  {lat: -15.882707175891438, lng: -47.867612763729994},
  {lat: -15.883140583987641, lng: -47.86716215261549},
  {lat: -15.883367606903835, lng: -47.866346761074965},
  {lat: -15.88330569158843, lng: -47.865617200222914},
  {lat: -15.883429522200185, lng: -47.864565774289076},

  {lat: -15.883377209644493, lng: -47.86312699085556},
  {lat: -15.883019046471004, lng: -47.863284312261385},
  {lat: -15.882998407998935, lng: -47.8634130582941},
  {lat: -15.882926173330011, lng: -47.86358471967105},
  {lat: -15.882926173330011, lng: -47.86387439824466},
  {lat: -15.882771384666494, lng: -47.86420699216251},
  {lat: -15.882544361078105, lng: -47.86414261914615},
  {lat: -15.882296698729162, lng: -47.86468978978519},
  {lat: -15.882203825255012, lng: -47.86490436650638},
  {lat: -15.88199743960356, lng: -47.865043841375154},
  {lat: -15.881749776542602, lng: -47.86518331624393},
  {lat: -15.881749776542602, lng: -47.865269146932405},
  {lat: -15.881677541425793, lng: -47.865494452489656},
  {lat: -15.881522751802498, lng: -47.865773402227205},
  {lat: -15.881316365453051, lng: -47.865537367833895},
  {lat: -15.8811306175577, lng: -47.86511894322757},
  {lat: -15.881017104870654, lng: -47.86472197629337},
  {lat: -15.880408262924016, lng: -47.86445375539188},
  {lat: -15.88037730481377, lng: -47.864271365178865},
  {lat: -15.880470179130256, lng: -47.86411043263797},
  {lat: -15.880563053403922, lng: -47.86388512708072},
  {lat: -15.88066624699108, lng: -47.86367055035953},
  {lat: -15.88066624699108, lng: -47.8633594141138},
  {lat: -15.880418582293055, lng: -47.863273583425325},
  {lat: -15.880191556052313, lng: -47.86334868527774},
  {lat: -15.87997484894744, lng: -47.863520346654695},
  {lat: -15.879603350510878, lng: -47.863531075490755}
];
 
var westCleanCampColor = '#8BB2C1';

function addWestCleanCamp(){
  westCleanCamp = createVegetation(westCleanCampCoordinates,
                                        westCleanCampColor);

  westCleanCamp.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(westCleanCamp, 'click', function(clicked_location) {
      addInfowindow(clicked_location.latLng, campFormationsContentString);
  });
} 