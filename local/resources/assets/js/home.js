
$( document ).ready(function() {
  
	function scrollNav() {
		  $('ul a').click(function(){  
		    //Animate
  		    $('body').stop().animate({
  		        scrollTop: $( $(this).attr('href') ).offset().top 
  		    }, 400);
  		    return false;
  		});
	}
	scrollNav();


  $( ".header-button" ).click(function() {
      $( "header" ).toggleClass( "active" );
  });

  function initializeMap() {
    	var mapCanvas = document.getElementById('map-canvas');
    	var themeArray = [
        {"elementType": "geometry","stylers": [{"color": "#f5f5f5"}]},
        {"elementType": "labels.icon","stylers": [{"visibility": "off"}]},
        {"elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},
        {"elementType": "labels.text.stroke","stylers": [{"color": "#f5f5f5"}]},
        {"featureType": "administrative.land_parcel","elementType": "labels.text.fill","stylers": [{"color": "#bdbdbd"}]},
        {"featureType": "poi","elementType": "geometry","stylers": [{"color": "#eeeeee"}]},
        {"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},
        {"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#e5e5e5"}]},
        {"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]},
        {"featureType": "road","elementType": "geometry","stylers": [{"color": "#ffffff"}]},
        {"featureType": "road.arterial","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},
        {"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#dadada"}]},
        {"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},
        {"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]},
        {"featureType": "transit.line","elementType": "geometry","stylers": [{"color": "#e5e5e5"}]},
        {"featureType": "transit.station","elementType": "geometry","stylers": [{"color": "#eeeeee"}]},
        {"featureType": "water","elementType": "geometry","stylers": [{"color": "#c9c9c9"}]},
        {"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]}
      ];
    	let mapOptions = {
      		center: new google.maps.LatLng(39.969854, -83.023514),
      		zoom: 14,
      		styles: themeArray,
      		draggable: true,
      		scrollwheel: false,
      		panControl: false,
         	zoomControl: true,
         	scaleControl: true,
         	mapTypeControl:false,
         	streetViewControl:false,
         	overviewMapControl:true,
         	rotateControl:true,
      		mapTypeId: google.maps.MapTypeId.DEFAULT 
    	}	
    	var map = new google.maps.Map( document.getElementById( "map-canvas" ), mapOptions);
      var myLatlng = new google.maps.LatLng(39.969854, -83.023514);
    	var marker = new google.maps.Marker({
      		position: myLatlng,
      		map: map,
      		title: 'BTD'
    	});

  }
  google.maps.event.addDomListener(window, 'load', initializeMap);
   	
});


 jQuery(document).ready(function ($) {
      var jssor_1_SlideoTransitions = [
        [{ b: -1, d: 1, o: -1, c: { x: 51.0, t: -51.0 } }, { b: 0, d: 1000, o: 1, c: { x: -51.0, t: 51.0 }, e: { o: 7, c: { x: 7, t: 7 } } }],
        [{ b: -1, d: 1, o: -1, c: { x: 51.0, t: -51.0 } }, { b: 1300, d: 1000, o: 1, c: { x: -51.0, t: 51.0 }, e: { o: 7, c: { x: 7, t: 7 } } }],
        [{ b: -1, d: 1, o: -1, c: { x: 51.0, t: -51.0 } }, { b: 2000, d: 1000, o: 1, c: { x: -51.0, t: 51.0 }, e: { o: 7, c: { x: 7, t: 7 } } }],
        [{ b: -1, d: 1, o: -1, c: { x: 51.0, t: -51.0 } }, { b: 2500, d: 1000, o: 1, c: { x: -51.0, t: 51.0 }, e: { o: 7, c: { x: 7, t: 7 } } }],
        [{ b: -1, d: 1, o: -1 }, { b: 3000, d: 2000, y: 220, o: 1}],
        [{ b: -1, d: 1, o: -1 }, { b: 3300, d: 2000, y: 265, o: 1}],
        [{ b: -1, d: 1, o: -1 }, { b: 3600, d: 2000, y: 315, o: 1}],                    
      ];
      var jssor_1_options = {
          $AutoPlay: true,
          $SlideDuration: 800,
          $AutoPlaySteps: 1,
          $AutoPlayInterval: 6000,
          $PauseOnHover: 0,
          $SlideEasing: $Jease$.$OutQuint,
          $CaptionSliderOptions: {
              $Class: $JssorCaptionSlideo$,
              $Transitions: jssor_1_SlideoTransitions
          },
          $ArrowNavigatorOptions: {
              $Class: $JssorArrowNavigator$
          },
          $BulletNavigatorOptions: {
              $Class: $JssorBulletNavigator$
          }
      };
      var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
      //responsive code begin
      //you can remove responsive code if you don't want the slider scales while window resizing
      function ScaleSlider() {
          var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
          if (refSize) {
              refSize = Math.min(refSize, 1920);
              jssor_1_slider.$ScaleWidth(refSize);
          }
          else {
              window.setTimeout(ScaleSlider, 30);
          }
      }
      ScaleSlider();
      $(window).bind("load", ScaleSlider);
      $(window).bind("resize", ScaleSlider);
      $(window).bind("orientationchange", ScaleSlider);
});
