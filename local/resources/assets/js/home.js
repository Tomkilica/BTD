
$( document ).ready(function() {
	$(window).scroll(function() {
		$('.sl-box .cl').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow + 800) {
					$(this).addClass("slideLeft");
				}
		});
	});

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

 	$('#arrow').on('click', function(){
		$('#more-info').toggleClass('more-info-active');
    $('#img-text').toggleClass('img-text-active');
    $(this).toggleClass('arrow-active');
    $('#icon').toggleClass('icon-active');    
    $('#product-title').toggleClass('product-title-active'); 
	});
  $('#arrow-second').on('click', function(){
    $('#more-info-second').toggleClass('more-info-active');
    $('#img-text-second').toggleClass('img-text-active');
    $(this).toggleClass('arrow-active');
    $('#icon-second').toggleClass('icon-active');    
    $('#product-title-second').toggleClass('product-title-active'); 
  });

 	$('footer .container .button button').on('click', function(){
		$('footer .box').toggleClass('box-inactive');
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
    	var mapOptions = {
      		center: new google.maps.LatLng(45.009353,20.6423336),
      		zoom: 16,
      		styles: themeArray,
      		draggable: true,
      		scrollwheel: true,
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
      var centerControlDiv = document.createElement('div');
      var centerControl = new CenterControl(centerControlDiv, map);
      centerControlDiv.index = 1;
      map.controls[google.maps.ControlPosition.RIGHT_TOP].push(centerControlDiv);
      	// var image    = {
      	// 	url: "http://colorcentar.com/colormap.png",
      	// 	// This marker is 20 pixels wide by 32 pixels tall.
      	// 	size: new google.maps.Size( 535, 240 ),
      	// 	// The origin for this image is 0,0.
      	// 	origin: new google.maps.Point( 0, 0 ),
      	// 	// The anchor for this image is the base of the flagpole at 0,32.
      	// 	anchor: new google.maps.Point( 0, 32 )
      	// };
        var myLatlng = new google.maps.LatLng(45.009353,20.6423336);
      	var marker = new google.maps.Marker({
      		position: myLatlng,
      		map: map,
      		title: 'Lala'
      		// icon: image
      	});

  }
  google.maps.event.addDomListener(window, 'load', initializeMap);
   
  /**
   * The CenterControl adds a control to the map that recenters the map on
   * This constructor takes the control DIV as an argument.
   * @constructor
   */
  function CenterControl(controlDiv, map) {
      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.style.marginTop = '20px';
      controlUI.style.marginRight = '11px';
      controlUI.style.height = '27px';
      controlUI.style.width = '28px';
      controlUI.style.cursor = 'pointer';
      controlUI.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
      controlUI.style.borderRadius = '2px';
      controlUI.style.backgroundColor = 'rgb(255, 255, 255)';
      controlUI.title = '';
      controlDiv.appendChild(controlUI);
      // Set CSS for the control interior.
      var controlText = document.createElement('div');
      controlText.style.color = 'rgb(106, 106, 106)';
      controlText.style.fontSize = '18px';
      controlText.style.lineHeight = '23px';
      controlText.style.paddingLeft = '9px';
      controlText.style.fontWeight = 'bold';
      controlText.innerHTML = 'x';
      controlUI.appendChild(controlText);
      // Setup the click event listeners: simply set the map
      controlUI.addEventListener('click', function() {
        $('footer .box').toggleClass('box-inactive');
      });
  }
	
});
