      var latLongCounter = 3;
      //variable that will hold your 2d array per project
      // joshua when you go love make sure to empty the array
      var coords= [
            [
            {lat: 25.774, lng: -80.190},
            {lat: 18.466, lng: -66.118},
            {lat: 32.321, lng: -64.757},
            {lat: 25.774, lng: -80.190}
            ],
            [
            {lat: 25.774, lng: -80.190},
            {lat: 18.466, lng: -66.118},
            {lat: 32.321, lng: -65.757}
            ]
          ];
      $('#addNewLatlong').on('click',function(){
        console.log('hello')
        $('<input style:"padding-right: 10px" type="text" name="latlong' + latLongCounter + '" placeholder="latlng">').insertAfter(document.getElementsByTagName('input')[latLongCounter-1]);
        latLongCounter++;
      })
      $('#removeNewLatlong').on('click',function(){
        console.log('hello')
        $(document.getElementsByTagName('input')[latLongCounter-1]).remove();
        latLongCounter--;
      })
      $("#geoCodeForm").submit(function(event){
        event.preventDefault();
        console.log($(this).serializeArray())
        var temp = $(this).serializeArray().map(function(element){
          var temp2 = element.value.split(',');
          return ({lat: parseFloat(temp2[0]), lng: parseFloat(temp2[1])})
        });
        coords.push(temp);
        console.log(coords);
        $('#map').empty();
        $('#scripts').empty().append('<script async defer src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap"></script>')

      })


      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: {lat: 24.886, lng: -70.268},
          mapTypeId: 'terrain'
        });

        // Define the LatLng coordinates for the polygon's path.
        [
          {lat: 25.774, lng: -80.190},
          {lat: 18.466, lng: -66.118},
          {lat: 32.321, lng: -64.757},
          {lat: 25.774, lng: -80.190}
        ];

        // Construct the polygon.
        var bermudaTriangle = new google.maps.Polygon({
          paths: coords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
        bermudaTriangle.setMap(map);
      }

      // append to body id ****

      