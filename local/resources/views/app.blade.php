<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>BTD</title>
	<link rel="stylesheet" type="text/css" href="./local/resources/assets/css/main.css">
	<link rel="stylesheet" type="text/css" href="./local/resources/assets/css/home.css">
	<link rel="stylesheet" href="./local/resources/assets/fonts/font-awesome/css/font-awesome.min.css">
	<script src='./local/resources/assets/js/jquery-1.9.1.min.js'></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3fZIaZe94AcqkgJA19jBuewfgpLFpEsU&callback=initMap"
    async defer></script>
	<script src='./local/resources/assets/js/home.js'></script>



</head>
<body>
	<header class="transperent">
		<div class="box">
			<div class="logo-img">
				<img src="./local/resources/assets/img/logobtd.png" />
			</div>
			<nav>
				<ul>
					<li ><a href="#about">About Us</a></li>
					<li ><a href="#our-works">Our Works</a></li>
					<li ><a href="#howWeDoIt">How We Do It</a></li>
					<li ><a href="#contant">Contant</a></li>
				</ul>
			</nav>
			<div class="header-button">
				<span>
					<i id="prva" class="bar"></i>
					<i class="bar"></i>
					<i id="druga" class="bar"></i>
				</span>
			</div>
		</div>
	</header>

	@yield('content')

  	<footer>
  		<div id="contant" class="box">
	  		<div class="container">
				<div class="contact">
				 	<div class="logo-box">
					 	<h3>Interested in creating with us?</h3>
						<img src="./local/resources/assets/img/logobtd.png" />
					</div>
				 	<div class="info">
						<h5></h5>
						<h5></h5>
						<h5></h5>
						<h5></h5>
					</div>
				</div>
	  		</div>
  		</div>
	    <div class="copyright">Copyright © 2017</div>
	</footer>
</body>
</html>
