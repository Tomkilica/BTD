@extends('app')


@section('content')
	<div id="jssor_1" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 1300px; height: 600px; overflow: hidden; visibility: hidden;">
	    <div data-u="loading" style="position: absolute; top: 0px; left: 0px;">
	        <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;"></div>
	        <div style="position:absolute;display:block;background:url('./local/resources/assets/img/loading.gif') no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div>
	    </div>
	    <div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 1300px; height: 600px; overflow: hidden;">
	        <div data-p="225.00" style="display: none;">
	            <img data-u="image" src="./local/resources/assets/img/home/light-background.jpg" />
	            <img  data-u="caption" data-t="0" style="position: absolute; top: 310px; left: 150px; width: 250px;" src="./local/resources/assets/img/home/imac.png" />
	            <img  data-u="caption" data-t="1" style="position: absolute; top: 350px; left: 500px; height: 150px;width: 240px;" src="./local/resources/assets/img/home/macbook.png" />
	            <img  data-u="caption" data-t="2" style="position: absolute; top: 375px;left: 850px; width: 85px;" src="./local/resources/assets/img/home/ipad.png" />
	            <img  data-u="caption" data-t="3" style="position: absolute; top: 400px;left: 1050px; width: 35px;" src="./local/resources/assets/img/home/iphone.png" />
	            <img  data-u="caption" data-t="4" style="position: absolute; top: 0px; left: 350px;" src="./local/resources/assets/img/home/8czrjAbji.png" />
	            <img  data-u="caption" data-t="5" style="position: absolute; top: 0px; left: 680px;width: 170px;" src="./local/resources/assets/img/home/8czrjAbji.png" />
	            <img  data-u="caption" data-t="6" style="position: absolute; top: 0px; left: 930px; width: 120px;" src="./local/resources/assets/img/home/8czrjAbji.png" />
	            <div style="position: absolute; top: 15%; left: 30px; left: 50%; width: 540px; height: 60px;margin-left:-270px;font-size: 40px; color: #464746; line-height: 60px;">WELCOME TO BTD Consulting</div>
	            <div style="position: absolute; top: 25%; left: 50%; width: 510px; height: 50px;margin-left:-250px; font-size: 40px; color: #464746;">Implement Digital Solutions</div>
 	        </div>
	    <!--    	<div data-p="225.00" style="display: none;">
	            <img data-u="image" src="./local/resources/assets/img/home/1.jpg" />
	        </div>
	        <div data-p="225.00" style="display: none;">
	            <img data-u="image" src="./local/resources/assets/img/home/2.jpg" />
	        </div> -->
	    </div>
	    <!-- Bullet Navigator 
	    <div data-u="navigator" class="jssorb05" style="bottom:16px;right:16px;" data-autocenter="1">
	        <div data-u="prototype" style="width:16px;height:16px;"></div>
	    </div>-->
	    <!-- Arrow Navigator -->
	    <span data-u="arrowleft" class="jssora22l" style="top:0px;left:12px;width:40px;height:58px;" data-autocenter="2"></span>
	    <span data-u="arrowright" class="jssora22r" style="top:0px;right:12px;width:40px;height:58px;" data-autocenter="2"></span>
	    <a href="http://www.jssor.com" style="display:none"></a>
	</div>
	<!-- pocinje about us el -->
	<div id="about" class="about-us">
		<div class="container">
			<h2>About Us</h2>
			<h3>We are a software service company</h3>
			<div class="text">
				<h4>Design</h4>
				<h5><!-- We are in qualitative not a quantitative business. People have already seen the current trends and now they want the future one. Following directions and standards in design is not our way, we are here to set them. Our talented team working hard to add true value to the user experience. -->Our design is beyond current standards and directions, with high awareness of usability. We are developing elegant solutions with presentation optimized across a range of displays, adding a true value in every step of the process.</h5>				
			</div>
			<div class="text">
				<h4>Projects</h4>
				<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</h5>				
			</div>
			<div class="text">
				<h4>Tsst</h4>
				<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</h5>				
			</div>
		</div>
	</div>
	<!--zavrsava se about us el  -->
		    <div class="grey-line"></div>
	<!-- pocinje our works el -->
	<div id="our-works" class="our-works">
		<div class="our-works-box">
			<h2>*</h2>
	        <div class="line"></div>
	        <div class="desc">
	        	<h5>We have all necessary components to create a successful collaboration with our clients, placing everything you need in a single location. From the simplest to the most complex projects, we make every idea possible.</h5>
			</div>
			<div class="icon-container">
				<div class="icon-box">
					<img src="./local/resources/assets/img/idea2.png">
					<h5>Innovative Ideas</h5>
					<h6>We are here to develop and deliver exceptional ideas for your business, in accordance with your requirements and needs.</h6>
				</div>
				<div class="icon-box">
					<img src="./local/resources/assets/img/team-icon.png">
					<h5>We Work Together</h5>
					<h6>Our talented team is  developing solutions with quality and innovation in every line of our code.</h6>
				</div>
				<div class="icon-box">
					<img src="./local/resources/assets/img/support2.png">
					<h5>Better Client Experience</h5>
					<h6>Our guideline is improving user experience through better optimized web page, fulfilling our clients preferences.</h6>
				</div>
			</div>
		</div>
	</div>
    <div class="grey-line"></div>
	<!-- pocinje our works el -->
	 <div id="howWeDoIt">
    	<div class="howWeDoIt-box">
	        <h2>How We Do Software Development</h2>
	        <div class="line"></div>
	        <div class="desc">
	        	<h5>Dataway’s technology partnerships are based on our broad industry knowledge and expertise, and are carefully chosen on the merits of each partners’ products. We have forged strong relationships with our partners over our long history, and these relationships enable us to deliver the very best solutions to you. We only recommend products that are tested and trusted, and our partners often rely on our feedback to help them evolve their products. Our team is constantly evaluating and researching new offerings as well as proven standards in order to meet our clients' diverse business objectives.</h5>
			</div>
            <div class="logos">
                <img src="./local/resources/assets/img/use/responsive-web-design.png"  alt="">
                <img src="./local/resources/assets/img/use/MSDotNetFrameworkIcon.png" alt="">
               	<img src="./local/resources/assets/img/use/angular-icon.png" alt="">
                <img src="./local/resources/assets/img/use/web-analytics-data-analysis.png" alt="">
				<img src="./local/resources/assets/img/use/Internet-php-icon.png" alt="">    
                <img src="./local/resources/assets/img/use/db.png" alt="">
      		</div>
        </div>
    </div>
	<div id="map-canvas"></div>
    <div class="grey-line"></div>
	<script type="text/javascript" src="./local/resources/assets/js/jssor.slider.mini.js"></script>
@endsection
