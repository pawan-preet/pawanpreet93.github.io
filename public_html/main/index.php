<?php
ob_start();
?>
<!DOCTYPE html>
<html>
<head>
<!-- Start of the image slider section -->
<html xmlns="http://www.w3.org/1999/xhtml">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<link href="../css/bannerscollection_zoominout.css" rel="stylesheet" type="text/css">
<link href='http://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Lato:400,700,900,700italic,900italic' rel='stylesheet' type='text/css'>

                     
    
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js" type="text/javascript"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
<script src="../js/jquery.ui.touch-punch.min.js" type="text/javascript"></script>
<script src="bannerscollection_zoominout.js" type="text/javascript"></script>


<script>
                
                function assignHeightWidthToWhyDivisions(){
                    var width = $(".whyCircle").width();
                    var browserWidth = $(window).width();
                    var projectImagesWidth = $(".projectImg").width();
		    $(".projectImg").height(0.488 * projectImagesWidth);
		    $(".projectImg img").height(0.488 * projectImagesWidth);
		    $('.dh-overlay').css('line-height',0.488 * projectImagesWidth + 'px');

                    if (browserWidth < 768){
                        $(".whyCircle").height(width + 30);
                        $(".whyInnerDiv").height(0.4 * width).width(0.4 * width);
			document.getElementById("whyDivOne").style.marginLeft = "0px";
			document.getElementById("whyDivTwo").style.marginLeft = "0px";
			document.getElementById("whyDivTwo").style.marginRight = "0px";
			document.getElementById("whyDivThree").style.marginLeft = "0px";
                    }else{
                        $(".whyCircle").height(width + 30);
                        $(".whyInnerDiv").height(0.4 * width).width(0.4 * width);
			document.getElementById("whyDivOne").style.marginLeft = "25px";
			document.getElementById("whyDivTwo").style.marginLeft = "-25px";
			document.getElementById("whyDivTwo").style.marginRight = "25px";
			document.getElementById("whyDivThree").style.marginLeft = "-50px";
                    }
                }
                
                $(document).ready(function() {
                    assignHeightWidthToWhyDivisions();
                }) ;
                
                $(function(){
                    var $window = $(window).on('resize', function(){
                        assignHeightWidthToWhyDivisions();
                    }).trigger('resize'); //on page load

                });
                
            </script>


	<script>
	
		jQuery(function() {

                    var browserWidth = $(window).height();
		var sliderHeight = 0.8 * browserWidth;
			jQuery('#bannerscollection_zoominout_opportune').bannerscollection_zoominout({
				skin: 'opportune',
				responsive:true,
				width100Proc:false,
				width: 1490,
				height: sliderHeight,
				pauseOnMouseOver:false,
				circleRadius:8,
				circleLineWidth:4,
				circleColor: "#ffffff", //849ef3
				circleAlpha: 50,
				behindCircleColor: "#000000",
				behindCircleAlpha: 20,
				thumbsWrapperMarginTop:25
			});		
			
			
		});


	</script>


</head>

<body bgcolor="#cccccc" style="margin:0;">




<div class="container-fluid">
 <div class="container">
    <div class="row">
            <div id="bannerscollection_zoominout_opportune" style="width:100%; max-height:900px !important;">
            	<div class="myloader"></div>
                <!-- CONTENT -->
                <ul class="bannerscollection_zoominout_list" style="width:100%; max-height:900px !important;">
               		<li data-initialZoom="0.85" data-finalZoom="1" data-horizontalPosition="left" data-verticalPosition="center" data-text-id="#bannerscollection_zoominout_photoText1" data-autoPlay="10"><img src="../images/slider/1.jpg" alt="" width="2000" height="945" /></li>
                    
                    <li data-initialZoom="1" data-finalZoom=".80" data-horizontalPosition="left" data-verticalPosition="top"  data-text-id="#bannerscollection_zoominout_photoText2"  data-target="_blank"><img src="../images/slider/2.jpg" alt="" width="2000" height="965" /></li>
                    
					<li data-horizontalPosition="left" data-verticalPosition="top" data-initialZoom="1" data-finalZoom="0.85"  data-text-id="#bannerscollection_zoominout_photoText3"><img src="../images/slider/3.jpg" alt="" width="2000" height="1063/></li>
					
					<li data-horizontalPosition="center" data-verticalPosition="center" data-initialZoom="1" data-finalZoom="0.73" data-duration="15" data-text-id="#bannerscollection_zoominout_photoText4"><img src="../images/slider/4.jpg" alt="" width="2000" height="945" /></li>
					
					<li data-initialZoom="0.85" data-finalZoom="1" data-horizontalPosition="left" data-verticalPosition="center" data-text-id="#bannerscollection_zoominout_photoText5" data-autoPlay="10"><img src="../images/slider/5.jpg" alt="" width="2000" height="945" /></li>
                    
                    <li data-initialZoom="0.85" data-finalZoom="1" data-horizontalPosition="right" data-verticalPosition="top"  data-text-id="#bannerscollection_zoominout_photoText6"  data-target="_blank"><img src="../images/slider/6.jpg" alt="" width="2000" height="900" /></li>
                    
					<li data-horizontalPosition="left" data-verticalPosition="top" data-initialZoom="1" data-finalZoom="0.85" data-bottom-thumb="images/opportuneFullWidth/thumbs/04_opportune.jpg" data-text-id="#bannerscollection_zoominout_photoText7"><img src="../images/slider/7.jpg" alt="" width="2000" height="900 "  /></li>
					
					<li data-horizontalPosition="center" data-verticalPosition="center" data-initialZoom="1" data-finalZoom="0.85" data-duration="15"  data-text-id="#bannerscollection_zoominout_photoText8"><img src="../images/slider/8.jpg" alt="" width="2000" height="900" /></li>
					
					<li data-initialZoom="0.85" data-finalZoom="1" data-horizontalPosition="left" data-verticalPosition="center" data-text-id="#bannerscollection_zoominout_photoText9" data-autoPlay="10"><img src="../images/slider/9.jpg" alt="" width="2000" height="900" /></li>
                    
                    <li data-initialZoom="0.85" data-finalZoom="1" data-horizontalPosition="left" data-verticalPosition="top"  data-text-id="#bannerscollection_zoominout_photoText10"  data-target="_blank"><img src="../images/slider/10.jpg" alt="" width="2000" height="1065" /></li>
                    
					<li data-horizontalPosition="left" data-verticalPosition="top" data-initialZoom="1" data-finalZoom="0.85"  data-text-id="#bannerscollection_zoominout_photoText11"><img src="../images/slider/11.jpg" alt="" width="2000" height="900"  /></li>
					
					<li data-horizontalPosition="center" data-verticalPosition="center" data-initialZoom="1" data-finalZoom="0.85" data-duration="15"  data-text-id="#bannerscollection_zoominout_photoText12"><img src="../images/slider/12.jpg" alt="" width="2000" height="900" /></li>
					
					<li data-initialZoom="0.85" data-finalZoom="1" data-horizontalPosition="left" data-verticalPosition="center" data-text-id="#bannerscollection_zoominout_photoText13" data-autoPlay="10"><img src="../images/slider/13.jpg" alt="" width="2000" height="970" /></li>
                    
                    <li data-initialZoom="0.85" data-finalZoom="1" data-horizontalPosition="left" data-verticalPosition="top"  data-text-id="#bannerscollection_zoominout_photoText14"  data-target="_blank"><img src="../images/slider/14.jpg" alt="" width="2000" height="900" /></li>
                    
					<li data-horizontalPosition="left" data-verticalPosition="top" data-initialZoom="1" data-finalZoom="0.85"  data-text-id="#bannerscollection_zoominout_photoText15"><img src="../images/slider/15.jpg" alt="" width="2000" height="970"  /></li>
					
										
					
                    
                    
                   
                </ul>    
               <!-- TEXTS -->
              
              <div id="overlayHeading" class="wow fadeIn" data-wow-delay="0.5s"><h1 style="color:#B9D6FB; opacity:1; display: table-cell; vertical-align: middle;">SOLAR ENERGY CONSULTANCY</h1></div>
			 			   
			   
           </div>  
          
        </div></div></div>   

</body>
</html>


<!-- End of the image slider section -->

<link type="text/css" href="../css/consult.css" rel="stylesheet">
<link type="text/css" href="march.css" rel="stylesheet">
<script type="text/javascript" src="../js/consultJS.js"></script>
<script type="text/javascript" src="../js/mobileConsult.js"></script>

<script type="text/javascript" src="../js/ImageSliderJS.js"></script>
<script type="text/javascript" src="../js/jssor.slider.min.js"></script>

<script src="../dist/jquery.directional-hover.min.js"></script>
<link rel="stylesheet" href="../dist/jquery.directional-hover.min.css">

<style>
		


</style>

<!DOCTYPE html>

<div class="container-fluid">
 <div class="container">
    <div class="row wow fadeInUp" id="headerText" data-wow-delay="1s">
<p>‘Several years of experience in solar consultancy in the Middle East, Africa and Asia’<br><br>
Rooftop and Ground Mount Solar PV Specialists</p>
</div>
</div>
</div>

<div class="versionHeadings wow fadeInUp" id="whatSection">
<p style="color:#404040">WHAT DO WE DO</p>
</div>


<div class="container-fluid">
 <div class="container">
                <div class="row">
<div id="content">

<div class="horSections  wow fadeInUp" id="FirstDiv" class="horSelectedSections">
<div class="text" id="HeadOne">FINANCIAL FEASIBILITY</div>
<div class="image">
<center>
<img src= "../images/consultImages/NotActive.png" width="20px" height="20px" id="ArrowOne" />
</center>
</div>
</div>

<div class="horSections  wow fadeInUp" id="SecondDiv" class="horSelectedSections">
<div class="text" id="HeadTwo">TENDERING AND SPECIFICATION</div>
<div class="image">
<center>
<img src= "../images/consultImages/NotActive.png" width="20px" height="20px" id="ArrowTwo" />
</center>
</div>
</div>

<div class="horSections  wow fadeInUp" id="ThirdDiv" class="horSelectedSections">
<div class="text" id="HeadThree">SOLAR CONTRACTS NEGOTIATION</div>
<div class="image">
<center>
<img src= "../images/consultImages/NotActive.png" width="20px" height="20px" id="ArrowThree" />
</center>
</div>
</div>

<div class="horSections  wow fadeInUp" id="FourthDiv" class="horSelectedSections">
<div class="text" id="HeadFour">FULL SYSTEM DESIGN AND REVIEW</div>
<div class="image">
<center>
<img src= "../images/consultImages/NotActive.png" width="20px" height="20px" id="ArrowFour" />
</center>
</div>
</div>

<div class="horSections wow fadeInUp" id="FifthDiv" class="horSelectedSections">
<div class="text" id="HeadFive">PROJECT MANAGEMENT</div>
<div class="image">
<center>
<img src= "../images/consultImages/NotActive.png" width="20px" height="20px" id="ArrowFive" />
</center>
</div>
</div>

<div class="horSections wow fadeInUp" id="SixthDiv" class="horSelectedSections">
<div class="text" id="HeadSix">TESTING AND O&M</div>
<div class="image">
<center>
<img src= "../images/consultImages/NotActive.png" width="20px" height="20px" id="ArrowSix" />
</center>
</div>
</div>


</div>

<div class="bigSection" id="OneBig" style="box-shadow:0px" >
<center>

<div class="Phase1">

<p class="PhaseText" id="Text" style="margin-top:100px"></p>

</div>

<div class="Phase2">

<div id="SliderContainer"> 


  <div id="slider1_container" style="position: relative; top: 0px; left: 0px; width: 600px; height: 300px; overflow: hidden; ">


  <div u="loading" style="position: absolute; top: 0px; left: 0px;">

            <div style="filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block;

                background-color: #000000; top: 0px; left: 0px;width: 100%;height:100%;">

            </div>

            <div style="position: absolute; display: block; background: url(../images/consultImages/ImageSlider/loading.gif) no-repeat center center;

                top: 0px; left: 0px;width: 100%;height:100%;">

            </div>

        </div>



        <!-- Slides Container -->

        <div u="slides" style="cursor: pointer; position: absolute; left: 0px; top: 0px; width: 600px; height: 300px; overflow: hidden;" >
        
		<div id="ImagesHTML1" style="background-color:#F2F2F2"> </div>
		<div id="ImagesHTML2" style="background-color:#F2F2F2"> </div>
		<div id="ImagesHTML3" style="background-color:#F2F2F2"> </div>
		<div id="ImagesHTML4" style="background-color:#F2F2F2"> </div>
		<div id="ImagesHTML5" style="background-color:#F2F2F2"> </div>
		<div id="ImagesHTML6" style="background-color:#F2F2F2"> </div>
		<div id="ImagesHTML7" style="background-color:#F2F2F2"> </div>
		<div id="ImagesHTML8" style="background-color:#F2F2F2"> </div>            
		<div id="ImagesHTML9" style="background-color:#F2F2F2"> </div>
		<div id="ImagesHTML10" style="background-color:#F2F2F2"> </div>
		<div id="ImagesHTML11" style="background-color:#F2F2F2"> </div>
		<div id="ImagesHTML12" style="background-color:#F2F2F2"> </div>
           
        </div>

        <div u="navigator" class="jssorb05" style="bottom: 16px; right: 6px;">

            <!-- bullet navigator item prototype -->

            <div u="prototype"></div>

        </div>




        <span u="arrowleft" class="jssora12l" style="top: 123px; left: 0px;">

        </span>

        <!-- Arrow Right -->

        <span u="arrowright" class="jssora12r" style="top: 123px; right: 0px;">

        </span>



        <script>

            jssor_slider1_starter('slider1_container');

        </script>



    </div>





</div>

</div>

</center>

</div>

</div></div></div>

<center>

<div id="mobileContent" style="margin-top:50px;">




<div class="mobileSectionHead  wow fadeInUp" id="FirstMobileDiv" >
<div class="text" id="MHeadOne">FINANCIAL FEASIBILITY</div>
<div class="image">
<center>
<img src= "../images/consultImages/NotActive.png" width="20px" height="20px" id="MArrowOne" />
</center>
</div>
</div>
<div id="DropOne" class="DropMobile" style="display:none;">
<div class="Mtext">Site Assessment<br>Shadow Analysis with 3D Models<br>Leasing vs Owning<br>Energy, Yield, Performance Ratios<br>Financial KPIs – ROI, NPV, IRR etc.<br>Technology Comparison</div>
</div>

<div class="mobileSectionHead wow fadeInUp" id="SecondMobileDiv" >
<div class="text" id="MHeadTwo">TENDERING AND SPECIFICATION</div>
<div class="image">
<center>
<img src= "../images/consultImages/NotActive.png" width="20px" height="20px" id="MArrowTwo" />
</center>
</div>
</div>
<div id="DropTwo" class="DropMobile" style="display:none;">
<div class="Mtext">Solar Project Specifications<br>Solar Tender<br>Techno-Commercial Due<br> Diligence<br>Installation Guidelines<br>Utility Process Compliance </div>
</div>

<div class="mobileSectionHead wow fadeInUp" id="ThirdMobileDiv" >
<div class="text" id="MHeadThree">SOLAR CONTRACTS NEGOTIATION</div>
<div class="image">
<center>
<img src= "../images/consultImages/NotActive.png" width="20px" height="20px" id="MArrowThree" />
</center>
</div>
</div>
<div id="DropThree" class="DropMobile" style="display:none;">
<div class="Mtext">Drafting EPC Contract<br>Setting Performance Guarantees<br>Setting Acceptance Criteria<br>Setting Bonds, Insurances, Liabilities<br>Offer Review and Comparison<br>Energy and PR Ratio Guarantee </div>
</div>

<div class="mobileSectionHead wow fadeInUp" id="FourthMobileDiv" >
<div class="text" id="MHeadFour">FULL SYSTEM DESIGN AND REVIEW</div>
<div class="image">
<center>
<img src= "../images/consultImages/NotActive.png" width="20px" height="20px" id="MArrowFour" />
</center>
</div>
</div>
<div id="DropFour" class="DropMobile" style="display:none;">
<div class="Mtext">Utility Approvals<br>Complete Construction Design<br>SLD, Drawings, Schematics,<br>Reports<br>EPC Design Review<br>LV and MV Design Packages<br>Solar Software's </div>
</div>

<div class="mobileSectionHead wow fadeInUp" id="FifthMobileDiv" >
<div class="text" id="MHeadFive">PROJECT MANAGEMENT</div>
<div class="image">
<center>
<img src= "../images/consultImages/NotActive.png" width="20px" height="20px" id="MArrowFive" />
</center>
</div>
</div>
<div id="DropFive" class="DropMobile" style="display:none;">
<div class="Mtext">Utility Approvals<br>Project Plans – Gantt<br>Procurement Schedules, BOQs<br>Site Supervision<br>EPC Management </div>
</div>

<div class="mobileSectionHead wow fadeInUp" id="SixthMobileDiv" >
<div class="text" id="MHeadSix">TESTING AND O&M</div>
<div class="image">
<center>
<img src= "../images/consultImages/NotActive.png" width="20px" height="20px" id="MArrowSix" />
</center>
</div>
</div>
<div id="DropSix" class="DropMobile" style="display:none;">
<div class="Mtext"> Commissioning Support<br>Acceptance Tests<br>Monitoring Schemes<br>Operations and Maintenance Plans<br>Integration with Building Management<br>Training </div>
</div>



</div> <!--Content Division End -->

</center>

 
<div id="whySection" style=" width:100%;  margin-top:100px;">
                <div class="container wow fadeIn" style="background-color:#47525E;">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 wow fadeInUp" data-wow-delay="1s" style="text-align:center;">
                            <h2 style="color:white;"><br>WHY DO YOU NEED US</h2>
                        </div>
                    </div>

                    <div class="row" style="padding:50px;">
<center>
                        <div id="whyDivOne" class="whyCircle col-xs-12 col-sm-4 col-md-4 col-lg-4 wow fadeIn" data-wow-delay="1.5s">
                            <div class="whyInnerDiv"><img src="../images/whySectionImages/reduction.png" style="width:100%; height:100%; padding:15%"/></div>
                            <p>10-15%<br>Reduction in Project<br>Cost</p>
                        </div>
                        <div id="whyDivTwo" class="whyCircle col-xs-12 col-sm-4 col-md-4 col-lg-4 wow fadeIn" data-wow-delay="1.8s">
                            <div class="whyInnerDiv"><img src="../images/whySectionImages/guarantee.png" style="width:100%; height:100%; padding:15%"/></div>
                            <p>Get Performance<br>Guarantee on Energy<br>Production</p>
                        </div>
                        <div id="whyDivThree" class="whyCircle col-xs-12 col-sm-4 col-md-4 col-lg-4 wow fadeIn" data-wow-delay="2.1s">
                            <div class="whyInnerDiv"><img src="../images/whySectionImages/drawing.png" style="width:100%; height:100%; padding:15%"/></div>
                            <p>Get Design and<br>Supervision from<br>Technical Experts</p>
                        </div> </center>
                    </div>
                </div>
            </div>

<!--
<div id="midText">
<p style="color:#404040" class="wow fadeInUp">ON-GOING PROJECTS</p>
</div>

<div class="container-fluid">
 <div class="container">
                    
                <div class="row">
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="../images/consultImages/1.jpg"/>
                            <div class="dh-overlay">Image Caption Here</div>
                          </div>
                        </div>
                        
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="../images/consultImages/2.jpg"/>
                            <div class="dh-overlay">Image Caption Here</div>
                          </div>
                        </div>

                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="../images/consultImages/4.jpg"/>
                            <div class="dh-overlay">Image Caption Here</div>
                          </div>
                        </div>
                        
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="../images/consultImages/5.jpg"/>
                            <div class="dh-overlay">Image Caption Here</div>
                          </div>
                        </div>
                        
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="../images/consultImages/6.jpg"/>
                            <div class="dh-overlay">Image Caption Here</div>
                          </div>
                        </div>
                        
                        
                         <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="../images/consultImages/7.jpg"/>
                            <div class="dh-overlay">Image Caption Here</div>
                          </div>
                        </div>


                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="../images/consultImages/9.png"/>
                            <div class="dh-overlay">Image Caption Here</div>
                          </div>
                        </div>
                
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="../images/consultImages/11.jpg"/>
                            <div class="dh-overlay">Image Caption Here</div>
                          </div>
                        </div>
                        
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="../images/consultImages/12.JPG"/>
                            <div class="dh-overlay">Image Caption Here</div>
                          </div>
                        </div>

                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="../images/consultImages/13.jpg"/>
                            <div class="dh-overlay">Image Caption Here</div>
                          </div>
                        </div>
                        
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="../images/consultImages/14.jpg"/>
                            <div class="dh-overlay">Image Caption Here</div>
                          </div>
                        </div>
                        
                    </div>

            </div>
</div>
-->
<div id="midText" class="wow fadeInUp">
<p style="color:#404040">OUR DESIGN CONCEPTS</p>
</div>

<div class="container-fluid" id="imagesSection" style="height: auto;">
 <div class="container">
                    
                <div class="row">
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="projectImages/al_tayer.jpg"/>
                            <div class="dh-overlay">Al Tayer</div>
                          </div>
                        </div>
                        
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="projectImages/aramex.jpg"/>
                            <div class="dh-overlay">Aramex</div>
                          </div>
                        </div>

                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="projectImages/ground1.jpg"/>
                            <div class="dh-overlay">Ground 1</div>
                          </div>
                        </div>
                        
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="projectImages/groundMount.jpg"/>
                            <div class="dh-overlay">Ground Mount</div>
                          </div>
                        </div>
                        
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="projectImages/hotpack.jpg"/>
                            <div class="dh-overlay">Hotpack</div>
                          </div>
                        </div>

                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="projectImages/kizad.jpg"/>
                            <div class="dh-overlay">Kizad</div>
                          </div>
                        </div>
                </div>
</div>
</div>

<div class="container-fluid" id="MoreimagesSection" style="display:none;">
 <div class="container">
                    
                                        <div class="row">

                        
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="projectImages/laborCamp.jpg"/>
                            <div class="dh-overlay">Labor Camp</div>
                          </div>
                        </div>
                        
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="projectImages/mall1.jpg"/>
                            <div class="dh-overlay">Mall</div>
                          </div>
                        </div>

                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="projectImages/fujairahCityCenter.jpg"/>
                            <div class="dh-overlay">Fujairah City Center</div>
                          </div>
                        </div>
                        
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="projectImages/mall3.jpg"/>
                            <div class="dh-overlay">Mall</div>
                          </div>
                        </div>
                        
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="projectImages/univ2.jpg"/>
                            <div class="dh-overlay">University</div>
                          </div>
                        </div>
                        
                        <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="projectImages/villa.jpg"/>
                            <div class="dh-overlay">Villa</div>
                          </div>
                        </div>
                        
                         <div class="projectImg  col-xs-12 col-sm-6 col-md-4 col-lg-4 wow fadeInUp">
                          <div class = "dh-container">
                            <img src="projectImages/villa2.jpg"/>
                            <div class="dh-overlay">Villa</div>
                          </div>
                        </div>
                </div>
</div>
</div>

<div class="container-fluid" style="margin-top:40px;">
 <div class="container" >
 <div class="row">
 
                         <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="height:20px"></div>
                         <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 wow fadeInUp" data-wow-delay="0.5s"><div id="MoreButton" style="position: absolute; left: 50%; margin-left: -25px;"><div id="ButtonText" style="text-align:center">+</div></div></div>
                         <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="height:20px"></div>
 
 
</div>
    </div>
</div>      
               
                       
 


<br><br>

<!-- Start of the Form section -->

<div class="container-fluid">
<div class="container">
    <div class="row"  style=" padding: 10px 10px 100px 10px; ">
       <div class="col-sm-12 wow fadeInUp"><h3><br><br>Have a project in mind. Get in touch with us!</h3></div>
        <div class="col-xs-1 col-sm-1 col-md-3 col-lg-3 contact" style=" height: 200px;"></div>
        <div class="col-xs-10 col-sm-10 col-md-6 col-lg-6 contact">
            <?php
            $errors = array();
            if (isset($_POST['btnSubmit'])) {
                if (!isset($_POST['fullName']) || empty($_POST['fullName']))
                    $errors[] = 'Please enter your name.';
                else if (!isset($_POST['phone']) || empty($_POST['phone']))
                    $errors[] = 'Please enter your phone number.';
                else if (!isset($_POST['company']) || empty($_POST['company']))
                    $errors[] = 'Please enter your company name.';
                else if (!isset($_POST['address']) || empty($_POST['address']))
                    $errors[] = 'Please enter your address.';
                else if (!isset($_POST['email']) || empty($_POST['email']))
                    $errors[] = 'Please enter your email address.';
                else if (!isset($_POST['pincode']) || empty($_POST['pincode']))
                    $errors[] = 'Please enter pincode.';
                else {
                    $fullName = filter_var($_POST['fullName'], FILTER_SANITIZE_STRING);
                    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
                    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
                    $company = filter_var($_POST['company'], FILTER_SANITIZE_STRING);
                    $address = filter_var($_POST['address'], FILTER_SANITIZE_STRING);
                    $pincode = filter_var($_POST['pincode'], FILTER_SANITIZE_STRING);
                    $message = '';
                    
                    if(isset($_POST['message']))
                        $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
                    
                    if (empty($email))
                        $errors[] = 'Please enter a valid email.';
                    else {
                        require '../phpmailer/PHPMailerAutoload.php';
                        require '../utilities.php';
                        $data = array(
                            'Email Id'=>$email,
                            'Name'=>$fullName,
                            'company Name'=>$company,
                            'Phone No'=>$phone,
                            'Address'=>$address,
                            'Pincode'=>$pincode,
                            'Message'=>$message,
                        );
                        
                        $success = @sendEmail($data);

                        if ($success) {
                            $message = 'Good decision! We shall contact you soon.';
                        } else {
                            $errors[] = "There is some problem in receiving your contact request. Please try again.";
                        }
                    }
                }
            }
            ?>

            <form method="post">
                <div class="row">
                    <div class="form-group col-xs-12">
            <?php
            if (isset($errors) && !empty($errors)) {
                foreach ($errors as $error) {
                    echo "<span class='error'>$error</span><br/>";
                }
            } else if (isset($message) && !empty($message)) {
                echo "<span class='success'>$message</span><br/>";
            }
            ?>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-sm-6 wow fadeInUp">
                        <label for="fullName" class="sr-only">Name</label>
                        <input type="text" class="form-control" id="fullName" name="fullName" placeholder="Name" <?php if (isset($_POST['fullName']) && !empty($_POST['fullName'])) echo 'value="' . $_POST['fullName'] . '"'; ?>>
                    </div>

                    <div class="form-group col-sm-6 wow fadeInUp">
                        <label for="phone" class="sr-only">Phone Number</label>
                        <input type="text" class="form-control" id="phone" name="phone" placeholder="Contact Number" <?php if (isset($_POST['phone']) && !empty($_POST['phone'])) echo 'value="' . $_POST['phone'] . '"'; ?>>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-sm-12 wow fadeInUp">
                        <label for="company" class="sr-only">company</label>
                        <input type="text" class="form-control" id="company" name="company" placeholder="Company Name" <?php if (isset($_POST['company']) && !empty($_POST['company'])) echo 'value="' . $_POST['company'] . '"'; ?>>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-sm-12 wow fadeInUp">
                        <label for="address" class="sr-only">Address</label>
                        <input type="text" class="form-control" id="address" name="address" placeholder="Address" <?php if (isset($_POST['address']) && !empty($_POST['address'])) echo 'value="' . $_POST['address'] . '"'; ?>>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-sm-8 wow fadeInUp">
                        <label for="email" class="sr-only">Email Address</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Email Address" <?php if (isset($_POST['email']) && !empty($_POST['email'])) echo 'value="' . $_POST['email'] . '"'; ?>>
                    </div>

                    <div class="form-group col-sm-4 wow fadeInUp">
                        <label for="zipCode" class="sr-only">Zip Code</label>
                        <input type="text" class="form-control" id="pincode" name="pincode" placeholder="Pin code" <?php if (isset($_POST['pincode']) && !empty($_POST['pincode'])) echo 'value="' . $_POST['pincode'] . '"'; ?>>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-sm-12 wow fadeInUp">
                        <label for="message" class="sr-only">Message</label>
                        <textarea class="form-control" rows="4" id="message" name="message" placeholder="Message" style="resize: none;"><?php if (isset($_POST['message']) && !empty($_POST['message'])) echo $_POST['message']; ?></textarea>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-xs-12 wow fadeInUp">
                        <button type="submit" class="btn btn-success" id="btnSubmit" name="btnSubmit" style="width: 100%">Submit</button>
                    </div>
                </div>

            </form>
        </div>
        <div class="col-xs-1 col-sm-1 col-md-3 col-lg-3 contact" style=" height: 200px;"></div>
    </div>
</div>
</div>

<!-- end of form section -->

<style>

</style>

<?php
$content = ob_get_clean();
$GLOBALS['template']['content'] = $content;

include 'template.php';
?>