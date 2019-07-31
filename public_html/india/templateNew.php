<!DOCTYPE html>
<html lang="en">
    <head>

<script language=JavaScript> var message="Function Disabled!"; function clickIE4(){ if (event.button==2){ return false; } } function clickNS4(e){ if (document.layers||document.getElementById&&!document.all){ if (e.which==2||e.which==3){  return false; } } } if (document.layers){ document.captureEvents(Event.MOUSEDOWN); document.onmousedown=clickNS4; } else if (document.all&&!document.getElementById){ document.onmousedown=clickIE4; } document.oncontextmenu=new Function("return false") </script>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Clenergize</title>

        <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="../css/bootstrap-theme.min.css">
        <link rel="stylesheet" type="text/css" href="../css/main1.css">
        <link rel="stylesheet" type="text/css" href="../js/jquery-ui.min.css">
        <link rel="stylesheet" type="text/css" href="../css/slider.css">
        <link rel="stylesheet" type="text/css" href="../css/accordion.css">
	<script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
        <script type="text/javascript" src="../js/jquery-ui.min.js"></script>
        <script type="text/javascript" src="../js/jquery.ui.touch-punch.min.js"></script>
        <script type="text/javascript" src="../js/jquery.cookie.js"></script>
        <script type="text/javascript" src="../js/bootstrap.min.js"></script>
        <script type="text/javascript" src="../js/vk/jquery.hoverdir.js"></script>
        <script type="text/javascript" src="../js/vk/modernizr.js"></script>
        
    
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
                <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
                <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->


<style>
.scrollToTop{
	width:50px; 
	height:50px;
	padding:10px; 
	text-align:center; 
	font-weight: bold;
	color: #444;
	text-decoration: none;
	position:fixed;
	top:70%;
	right:15px;
	display:none;
cursor:pointer;
}
#scrollText{
font-size:10px;
color:green;
}

/**************************************** NEW WORK ********************************************/

.mobileDropDownText{
text-decoration:none;
font-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;
font-size:17px;
color:green;
padding-left:2em; 


}

.mobileDropDownText:hover {
text-decoration:none;
color:green;

}

@media screen and (min-width: 0px) and (max-width: 1050px) {
img.navbar-brand{ width:45px;  height:45px;}
.brand-name{font-size: 28px;margin-top:-13px;}
.mobileMenu{display:block; text-align:left; background-color:#F2F2F2;  }
.bg-image{display:none;}
.desktopMenu{display:none}
.socialLinkImages{height:35px; width:35px}
#termsPrivacySection{display:none}
#termsPrivacySectionMobile{display:block;}

}

@media screen and (min-width: 1050px) and (max-width: 20000px) {

img.navbar-brand{ width:75px;  height:75px;}
.brand-name{font-size: 42px;}
.mobileMenu{display:none}
.desktopMenu{display:block}
#termsPrivacySection{display:block}
#termsPrivacySectionMobile{display:none;}

}

/**************************************** END NEW WORK ********************************************/


</style>
    </head>

    <body>
        <nav class="navbar navbar-default site-navbar">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <img class="navbar-brand" src="../images/logo.png">
                    <a class="navbar-brand brand-name" href="index.php">Clenergize</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <!--<li><a href="index.php" class="nav-opt-lg">Residential</a></li>

                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle nav-opt-lg" data-toggle="dropdown" role="button" aria-expanded="false">Others<span class="caret"></span></a>-->
                           

<!--**************************************** NEW WORK ********************************************-->
                          <!-- <ul class="dropdown-menu" role="OthersMenu" id="othersmenu">
<div  class="mobileMenu" style="margin-bottom:-10px" >
<li><a href="commercial.php" class="mobileDropDownText">COMMERCIAL<br></a></li>
<li> <a href="school.php" class="mobileDropDownText">SCHOOLS<br></a></li>
<li> <a href="housing.php" class="mobileDropDownText">DEVELOPERS/SOCIETIES<br></a></li><br></div>

                              <li class="desktopMenu">-->

<!--**************************************** END NEW WORK ********************************************-->


                                    <!--<a href="commercial.php" class="nav-opt-sm bg-image-container">
                                        <img src="../images/commercial_400x195.jpg" class="bg-image"/>
                                        <div class="image-overlay"></div>

                                        <span class="image-overlay-text">COMMERCIAL</span>
                                    </a>
                                </li>

                                <li class="desktopMenu">
                                    <a href="school.php" class="nav-opt-sm bg-image-container">
                                        <img src="../images/school_400x195.jpg" class="bg-image"/>
                                        <div class="image-overlay"></div>

                                        <span class="image-overlay-text">SCHOOLS</span>
                                    </a>
                                </li>

                                <li class="desktopMenu">
                                    <a href="housing.php" class="nav-opt-sm bg-image-container">
                                        <img src="../images/housing_400x195.jpg" class="bg-image"/>
                                        <div class="image-overlay"></div>

                                        <span class="image-overlay-text">DEVELOPERS/SOCIETIES</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
			<li><a href="Consult.php" class="nav-opt-lg">Consultancy</a></li>-->
                        <li><a href="#contact_us" class="nav-opt-sm">Contact</a></li>
                        <li><a href="faq.php" class="nav-opt-sm">FAQ</a></li>
<li class="dropdown" style="padding-top:10px;">
                            <a href="#" class="dropdown-toggle nav-opt-lg" data-toggle="dropdown" role="button" aria-expanded="false" style="background:#007aff;height:30px;width:80px;padding-top:3px; padding-right:7px"><span style="color:white; font-size:17px;font-weight:200">INDIA</span><span style="color:white" class="caret"></span></a>

                           <ul class="dropdown-menu" style="width:50px !important;">
<li style="width:80px;padding:0px" ><a href="http://clenergize.com/" style="width:80px;padding:0px" class="nav-opt-lg" ><span style="color:#00b050;font-size:17px;padding:0px">UAE</span></a></li>
</ul>
</li>
                    </ul>
                    </ul>
                </div>
            </div>
        </nav><!-- end top navigation bar -->

        <?php
        if (!empty($GLOBALS['template']['content'])) {
            echo $GLOBALS['template']['content'];
        }
        ?>


<div id="termsPrivacySectionMobile" style="padding-top:50px;  background-color:black; text-align:center; font-family: Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif;">
                    <a href="http://www.clenergize.com/terms.php" style="color:white;" target="_blank" class="social-link">Terms of Use</a>
                    <a href="http://www.clenergize.com/privacy.php" style="color:white;" target="_blank" class="social-link">Privacy Policy</a>
                </div>


        <div class="container-fluid" style="background-color: #000000; padding: 40px 20px;">
            <div class="row">
                <div class="col-md-6 contact">
                    <a href="http://www.facebook.com" target="_blank" class="social-link"><img src="../images/social_facebook.png" class="socialLinkImages"></a>
                    <a href="http://www.twitter.com" target="_blank" class="social-link"><img src="../images/social_twitter.png" class="socialLinkImages"></a>
                    <a href="http://www.google.com" target="_blank" class="social-link"><img src="../images/social_googleplus.png" class="socialLinkImages"></a>
                    <a href="https://www.linkedin.com/company/clenergize" target="_blank" class="social-link"><img src="../images/social_linkedin.png" class="socialLinkImages"></a>
                    <a href="http://www.youtube.com" target="_blank" class="social-link"><img src="../images/social_youtube.png" class="socialLinkImages"></a>
                </div>

                <div class="col-sm-6" id="termsPrivacySection" style="text-align:right; font-family: Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif;">
                    <a href="http://www.clenergize.com/terms.php" target="_blank" class="social-link">Terms of Use</a>
                    <a href="http://www.clenergize.com/privacy.php" target="_blank" class="social-link">Privacy Policy</a>
                </div>
            </div>




            <div class="row" style="padding-top: 40px;">
                <div class="col-sm-12 contact">
                    <p>
                        <a name="contact_us"></a>
                        <strong>Contact Us:</strong><br/><br/>
                        A 300 Defence Colony<br/>
                        New Delhi – 110024<br/>
                        Email: <a href="mailto:info@clenergize.com">info@clenergize.com</a><br/>
                        <span style="font-size: 24px;">Phone: +91 7827 551 551</span><br/>
                    </p>
                </div>
            </div>
        </div><!-- end of contact section -->

        <script type="text/javascript">
            $(function () {
                //menu animation
                $(".bg-image-container").hover(function () {
                    $(this).find('div').stop().slideToggle("3000");
                });

                //how section animation
                $('.how').each(function () {
                    $(this).hoverdir();
                });

                //expense slider
                $("#slider-electricity-bill").slider({
                    range: "min",
                    value: 3000,
                    min: 100,
                    max: 150000,
                    slide: function (event, ui) {
                        $("#amount").text(ui.value);
                        $("#electricityBill").val(ui.value);
                        $("#billAmount").val(ui.value);
                    }
                });
                $('#slider-electricity-bill').slider("option", "value", $('#billAmount').val());
                $("#amount").val($("#slider-electricity-bill").slider("value"));
                
                //vk-accordion in faq page
                $('.vk-accordion h3').next('div').slideToggle();
            
                $('.vk-accordion h3').click(function(e) {
                    //Close all <div> but the <div> right after the clicked <a>
                    //$(e.target).next('div').siblings('div').slideUp();
                    //Toggle open/close on the <div> after the <a>, opening it if not open.
                    $(e.target).next('div').slideToggle();
                });
            });
        </script>

<div class="scrollToTop" >
<img src="upArrow.png" width="40px" height="40px"/>
</div>
<script type="text/javascript">
$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 700) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},1100);
		return false;
	});
	
});
</script>

    </body>
</html>