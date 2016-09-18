      var latLongCounter = 3;
      //variable that will hold your 2d array per project
      // joshua when you go love make sure to empty the array
      var coords = [
          [
              { lat: 34.391315, lng: -91.531769 },
              { lat: 34.393975, lng: -91.530380 },
              { lat: 34.394081, lng: -91.525158 },
              { lat: 34.391235, lng: -91.525199 }
          ],
          [
              { lat: 34.388376, lng: -91.527426 },
              { lat: 34.388327, lng: -91.525105 },
              { lat: 34.385991, lng: -91.525177 },
              { lat: 34.385953, lng: -91.527487 }
          ]
      ];
      $('#contactform').submit(function(event) {
          event.preventDefault();
          var data = $(this).serializeArray()
          console.log(data)
          var method = $('#method').val();
          var sectoralScope = $('#sectoral-scope').val()

          json = '{"userId":"' + userId + '","name": "'+ data[4].value + '","projectType": "'+ sectoralScope +'","programType": "Carbon offset","projectStartDate": "'+ data[1].value+'", "methodology" : "' + method + '"}'

          console.log(json);


      // }
      })
      $('#addNewLatlong').on('click', function() {
          // console.log('hello')
          $('<input style:"padding-right: 10px" type="text" name="latlong' + latLongCounter + '" placeholder="latlng">').insertAfter(document.getElementsByTagName('input')[latLongCounter - 1]);
          latLongCounter++;
      })
      $('#removeNewLatlong').on('click', function() {
          console.log('hello')
          $(document.getElementsByTagName('input')[latLongCounter - 1]).remove();
          latLongCounter--;
      })
      $("#geoCodeForm").submit(function(event) {
          event.preventDefault();
          console.log($(this).serializeArray())
          var temp = $(this).serializeArray().map(function(element) {
              var temp2 = element.value.split(',');
              return ({ lat: parseFloat(temp2[0]), lng: parseFloat(temp2[1]) })
          });
          coords.push(temp);
          console.log(coords);
          $('#map').empty();
          $('#scripts').empty().append('<script async defer src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap"></script>')
      })


      function initMap() {
          var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 15,
              center: { lat: 34.391315, lng: -91.531769 },
              mapTypeId: 'satellite'
          });

          // Define the LatLng coordinates for the polygon's path.
          [
              { lat: 25.774, lng: -80.190 },
              { lat: 18.466, lng: -66.118 },
              { lat: 32.321, lng: -64.757 },
              { lat: 25.774, lng: -80.190 }
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
