window.onload = function(){

    navigator.geolocation.getCurrentPosition(
        function(geoPosition) {
            addMap(geoPosition.coords.latitude, geoPosition.coords.longitude);
        },

        function(error){
            alert('failed');
        }
    );


    var container = document.querySelector("div.map");

    function addMap(latitude, longitude){

        var options = {
            zoom:18,
            center: new google.maps.LatLng (latitude, longitude)
        };

        var map = new google.maps.Map(container, options);

        var marker = new google.maps.Marker({

            position: options.center,
            map:map,
            title:"Here i am"

        });

    }

};