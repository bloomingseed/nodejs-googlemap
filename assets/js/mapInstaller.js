
/**
 * Initialize Google Map for the `element` container.
 */
// var map;
function initMap(element, center, zoom) {
    if(!zoom){
        zoom = 17;
    }
    if(!center){
        center = {lat:16.06778, lng:108.22083}
    }
    if(!element){
        alert('Specify the map container element.');
    } else{
        center = new google.maps.LatLng(center.lat,center.lng);
        map = new google.maps.Map(element, {
            center,
            zoom,
            disableDefaultUI: false,
        });
        globalThis.map = map;
        var gMarkerConfig = {
            position: center,
            map,
            title: "Nha cua tui"
        };

        var gMarker = new google.maps.Marker(gMarkerConfig); //Hiển thị vị trí đánh dấu
        globalThis.marker = gMarker;
    }
}
function changeCenter(lat, lng, zoom){
    if(!zoom){
        zoom = 17;
    }
    let map = globalThis.map;
    let center = new google.maps.LatLng(lat,lng);
    map.setCenter(center);
    map.setZoom(zoom);
    globalThis.marker.setPosition(center);
}