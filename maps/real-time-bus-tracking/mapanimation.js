//my access token
mapboxgl.accessToken = "pk.eyJ1IjoibHVsaW5sdWxpbiIsImEiOiJjbDFqaXc5bWkyMXNoM2tuc2xhandrZTA5In0.jVjCWCQvUi1hFmERaLPm9A";
 
//map
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

//request bus data from MBTA
async function getBusLocations(){
  const url = 'https://api-v3.mbta.com/vehicles';
  const response = await fetch(url);
  const json = await response.json();
  data = json.data;
  return data;
}


let busRoute1 = [];
let marker = [];

function getBusRoute(data) {
  for (let i = 0; i < data.length; i++) {
    if(data[i].relationships.route.data.id === "1"){
      busRoute1.push(data[i]);
    }
  }
}

async function run(){

  //get bus data
  const locations = await getBusLocations();
  console.log(new Date());
  console.log(locations);
  busRoute1 = [];

  for (let i = 0; i < marker.length; i++) {
    marker[i].remove();
  }

  getBusRoute(locations)
  
  let lng = [];
  let lat = [];

  for (let i = 0; i < busRoute1.length; i++) {
    let lnglat = [busRoute1[i].attributes.longitude, busRoute1[i].attributes.latitude];

    marker[i] = new mapboxgl.Marker()
    .setLngLat(lnglat)
    .addTo(map);

    lng.push(busRoute1[i].attributes.longitude);
    lat.push(busRoute1[i].attributes.latitude);
  }



  
  setTimeout(run, 15000);
}

run();






// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
