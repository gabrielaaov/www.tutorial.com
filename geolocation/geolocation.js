(function(){

    function sucess(geoPosition) {
        console.log(geoPosition);
        showCoords(geoPosition.coords);
    }

    function error(positionError) {
        console.log(positionError);
    }

    function showCoords(coords){
        var innerHTML ='';

        for(var property in coords){
           innerHTML += '<h1>' + property + ':' + coords[property] + '</h1>'
        }
        document.body.innerHTML = innerHTML;
    }

    navigator.geolocation.getCurrentPosition(sucess,error);



})();