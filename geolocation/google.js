window.onload = function(){

    var container = document.querySelector("div.map");

    var latitude = -23.5854084, longitude = -46.677015;

    var options = {
        zoom:20,
        center: new google.maps.LatLng (latitude, longitude)
    };

    var map = new google.maps.Map(container, options);

};