<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Lala</title>
	<link rel="stylesheet" type="text/css" href="./local/resources/assets/css/main.css">
	<link rel="stylesheet" href="./local/resources/assets/fonts/font-awesome/css/font-awesome.min.css">
	<script src='https://code.jquery.com/jquery-3.1.1.min.js'></script>
	<script src="https://maps.googleapis.com/maps/api/js"></script>
	<script src='./local/resources/assets/js/home.js'></script>
</head>
<body>
	<header >
		
	</header>

	@yield('content')

  	<footer>
  		<div class="box">
	  		<div class="container">
				<div class="contact">
				 	<h3>Želite da poslujete sa nama?</h3>
				 	<div class="info">
						<h5>infolala@yahoo.com</h5>
						<h5>Srbija</h5>
						<h5>Jna 4, Crepaja</h5>
						<h5>+381 64 333 33 33</h5>
					</div>
					<div class="button">
						<button>Otvori Mapu</button>
					</div>
				</div>
	  		</div>
  		</div>
		<div id="map-canvas"></div>
	    <div class="copyright">Copyright © 2017</div>
	</footer>
</body>
</html>
