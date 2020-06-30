$(document).ready(function () {

{/* <script type='text/javascript'> */}
    var map, contextMenu, loc;
    var lat = 12.972442, long = 77.580643;

    $(document).ready(function() {
        $('#go_bttn').on('click', function () {

            lat = $('#lat').val();
            long = $('#long').val();
            console.log(lat, long);
            set_mapTypeId();
        });
    });

    function GetMap() {
      var indiaBounds = Microsoft.Maps.LocationRect.fromEdges(7.798000, 68.14712, 37.090000, 97.34466);
      map = new Microsoft.Maps.Map('#myMap', {
        showDashboard: false, //Hide the default navigation bar.
          maxBounds: indiaBounds,
          bounds: indiaBounds
      });
    }

    function GetMapStreetView() {
        loc = new Microsoft.Maps.Location(lat, long);
      map = new Microsoft.Maps.Map('#myMap', {
        showDashboard: false,
        center: loc,
        mapTypeId: Microsoft.Maps.MapTypeId.streetside,
        streetsideOptions: {
        showExitButton: false,
          showCurrentAddress: false
        },
      });
    }

    function GetMapBirdseyeView() {
        map = new Microsoft.Maps.Map('#myMap', {
            showDashboard: false,
            center: new Microsoft.Maps.Location(lat, long),
            mapTypeId: Microsoft.Maps.MapTypeId.birdseye,
        });
    }

    function set_mapTypeId() {
        GetMap();
      var map_type_id = document.getElementById("map_type").value;
      if (map_type_id == "road") {
        map.setView({
            mapTypeId: Microsoft.Maps.MapTypeId.road
        });
      } else if (map_type_id == "aerial") {
        map.setView({
            mapTypeId: Microsoft.Maps.MapTypeId.aerial
        });
      } else if (map_type_id == "streetside") {
        GetMapStreetView();
      } else if (map_type_id == "birdseye") {
        GetMapBirdseyeView();
        setTimeout(function() {
        document.getElementsByClassName("birdseyeV2InfoExitControl")[0].innerHTML = "";
        }, 2000);
      } else if (map_type_id == "canvasLight") {
        map.setView({
            mapTypeId: Microsoft.Maps.MapTypeId.canvasLight
        });
      } else if (map_type_id == "canvasDark") {
        map.setView({
            mapTypeId: Microsoft.Maps.MapTypeId.canvasDark
        });
      } else if (map_type_id == "grayscale") {
        map.setView({
            mapTypeId: Microsoft.Maps.MapTypeId.grayscale
        });
      }
    }
//   </script>
});