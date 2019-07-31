var flag=0;

$(window).load(function() {
				$('.dh-container').directionalHover();
			});

$(document).ready(
    function() {
        $("#FirstDiv").click(function() {

            if (flag==0){
                        $("#OneBig").slideToggle("fast");
            flag=1;
            
            }
            
            
            $("#ArrowOne").attr('src', "../images/consultImages/Active.png");
            
            $(this).css('background-color','#D3D3D3');

            document.getElementById("HeadOne").style.color = "green";
            document.getElementById("HeadTwo").style.color = "gray";
            document.getElementById("HeadThree").style.color = "gray";
            document.getElementById("HeadFour").style.color = "gray";
            document.getElementById("HeadFive").style.color = "gray";
            document.getElementById("HeadSix").style.color = "gray";

           
            document.getElementById('Text').innerHTML = 'Site Assessment<br>Shadow Analysis with 3D Models<br>Leasing vs Owning<br>Energy, Yield, Performance Ratios<br>Financial KPIs – ROI, NPV, IRR etc.<br>Technology Comparison';



            document.getElementById('ImagesHTML1').innerHTML = '<img u="image" src="whatSectionSliderImages/1.1.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML2').innerHTML = '<img u="image" src="whatSectionSliderImages/1.2.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML3').innerHTML = '<img u="image" src="whatSectionSliderImages/1.3.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML4').innerHTML = '<img u="image" src="whatSectionSliderImages/1.4.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML5').innerHTML = '<img u="image" src="whatSectionSliderImages/1.4.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML6').innerHTML = '<img u="image" src="whatSectionSliderImages/1.5.jpg" height="300px" width="500px" />';
            document.getElementById('ImagesHTML7').innerHTML = '<img u="image" src="whatSectionSliderImages/1.5.jpg" height="300px" width="500px" />';
            
            document.getElementById('ImagesHTML8').innerHTML = '<img u="image" src="whatSectionSliderImages/1.1.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML9').innerHTML = '<img u="image" src="whatSectionSliderImages/1.2.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML10').innerHTML = '<img u="image" src="whatSectionSliderImages/1.3.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML11').innerHTML = '<img u="image" src="whatSectionSliderImages/1.4.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML12').innerHTML = '<img u="image" src="whatSectionSliderImages/1.5.jpg" height="300px" width="500px" />';
          




            $("#ArrowTwo").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowThree").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowFour").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowFive").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowSix").attr('src', "../images/consultImages/NotActive.png");

            $("#SecondDiv").css('background-color','#F2F2F2');
            $("#ThirdDiv").css('background-color','#F2F2F2');
            $("#FourthDiv").css('background-color','#F2F2F2');
            $("#FifthDiv").css('background-color','#F2F2F2');
            $("#SixthDiv").css('background-color','#F2F2F2');
           
        });

 $("#SecondDiv").click(function() {

            if (flag==0){
                        $("#OneBig").slideToggle("fast");
            flag=1;
            
            }
            
            
            $("#ArrowTwo").attr('src', "../images/consultImages/Active.png");
            
            $(this).css('background-color','#D3D3D3');

            document.getElementById("HeadOne").style.color = "gray";
            document.getElementById("HeadTwo").style.color = "green";
            document.getElementById("HeadThree").style.color = "gray";
            document.getElementById("HeadFour").style.color = "gray";
            document.getElementById("HeadFive").style.color = "gray";
            document.getElementById("HeadSix").style.color = "gray";
           
            document.getElementById('Text').innerHTML = 'Solar Project Specifications<br>Solar Tender<br>Techno-Commercial Due<br> Diligence<br>Installation Guidelines<br>Utility Process Compliance';


            document.getElementById('ImagesHTML1').innerHTML = '<img u="image" src="whatSectionSliderImages/2.1.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML2').innerHTML = '<img u="image" src="whatSectionSliderImages/2.2.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML3').innerHTML = '<img u="image" src="whatSectionSliderImages/2.3.png" height="300px" width="600px" />';

	    document.getElementById('ImagesHTML4').innerHTML = '<img u="image" src="whatSectionSliderImages/2.1.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML5').innerHTML = '<img u="image" src="whatSectionSliderImages/2.2.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML6').innerHTML = '<img u="image" src="whatSectionSliderImages/2.3.png" height="300px" width="600px" />';

      	    document.getElementById('ImagesHTML7').innerHTML = '<img u="image" src="whatSectionSliderImages/2.1.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML8').innerHTML = '<img u="image" src="whatSectionSliderImages/2.2.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML9').innerHTML = '<img u="image" src="whatSectionSliderImages/2.3.png" height="300px" width="600px" />';

	    document.getElementById('ImagesHTML10').innerHTML = '<img u="image" src="whatSectionSliderImages/2.1.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML11').innerHTML = '<img u="image" src="whatSectionSliderImages/2.2.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML12').innerHTML = '<img u="image" src="whatSectionSliderImages/2.3.png" height="300px" width="600px" />';

            $("#ArrowOne").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowThree").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowFour").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowFive").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowSix").attr('src', "../images/consultImages/NotActive.png");

            $("#FirstDiv").css('background-color','#F2F2F2');
            $("#ThirdDiv").css('background-color','#F2F2F2');
            $("#FourthDiv").css('background-color','#F2F2F2');
            $("#FifthDiv").css('background-color','#F2F2F2');
            $("#SixthDiv").css('background-color','#F2F2F2');
           
        });

$("#ThirdDiv").click(function() {

            if (flag==0){
                        $("#OneBig").slideToggle("fast");
            flag=1;
            
            }
            
            
            $("#ArrowThree").attr('src', "../images/consultImages/Active.png");
            
            $(this).css('background-color','#D3D3D3');

            document.getElementById("HeadOne").style.color = "gray";
            document.getElementById("HeadTwo").style.color = "gray";
            document.getElementById("HeadThree").style.color = "green";
            document.getElementById("HeadFour").style.color = "gray";
            document.getElementById("HeadFive").style.color = "gray";
            document.getElementById("HeadSix").style.color = "gray";
           
            document.getElementById('Text').innerHTML = 'Drafting EPC Contract<br>Setting Performance Guarantees<br>Setting Acceptance Criteria<br>Setting Bonds, Insurances, Liabilities<br>Offer Review and Comparison<br>Energy and PR Ratio Guarantee';


            document.getElementById('ImagesHTML1').innerHTML = '<img u="image" src="whatSectionSliderImages/transparent.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML2').innerHTML = '<img u="image" src="whatSectionSliderImages/transparent.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML3').innerHTML = '<img u="image" src="whatSectionSliderImages/transparent.png" height="300px" width="600px" />';

           document.getElementById('ImagesHTML4').innerHTML = '<img u="image" src="whatSectionSliderImages/transparent.png" height="300px" width="450px" />';

 	    document.getElementById('ImagesHTML5').innerHTML = '<img u="image" src="whatSectionSliderImages/transparent.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML6').innerHTML = '<img u="image" src="whatSectionSliderImages/transparent.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML7').innerHTML = '<img u="image" src="whatSectionSliderImages/transparent.png" height="300px" width="600px" />';

            document.getElementById('ImagesHTML8').innerHTML = '<img u="image" src="whatSectionSliderImages/transparent.png" height="300px" width="450px" />';

 	    document.getElementById('ImagesHTML9').innerHTML = '<img u="image" src="whatSectionSliderImages/transparent.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML10').innerHTML = '<img u="image" src="whatSectionSliderImages/transparent.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML11').innerHTML = '<img u="image" src="whatSectionSliderImages/transparent.png" height="300px" width="600px" />';

            document.getElementById('ImagesHTML12').innerHTML = '<img u="image" src="whatSectionSliderImages/transparent.png" height="300px" width="450px" />';

            $("#ArrowOne").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowTwo").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowFour").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowFive").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowSix").attr('src', "../images/consultImages/NotActive.png");

            $("#FirstDiv").css('background-color','#F2F2F2');
            $("#SecondDiv").css('background-color','#F2F2F2');
            $("#FourthDiv").css('background-color','#F2F2F2');
            $("#FifthDiv").css('background-color','#F2F2F2');
            $("#SixthDiv").css('background-color','#F2F2F2');
           
        });

$("#FourthDiv").click(function() {

            if (flag==0){
                        $("#OneBig").slideToggle("fast");
            flag=1;
            
            }
            
            
            $("#ArrowFour").attr('src', "../images/consultImages/Active.png");
            
            $(this).css('background-color','#D3D3D3');

            document.getElementById("HeadOne").style.color = "gray";
            document.getElementById("HeadTwo").style.color = "gray";
            document.getElementById("HeadThree").style.color = "gray";
            document.getElementById("HeadFour").style.color = "green";
            document.getElementById("HeadFive").style.color = "gray";
            document.getElementById("HeadSix").style.color = "gray";
           
            document.getElementById('Text').innerHTML = 'Utility Approvals<br>Complete Construction Design<br>SLD, Drawings, Schematics,<br>Reports<br>EPC Design Review<br>LV and MV Design Packages<br>Solar Software\'s';

document.getElementById('ImagesHTML1').innerHTML = '<img u="image" src="whatSectionSliderImages/4.1.jpg" height="300px" width="500px" />';
            document.getElementById('ImagesHTML2').innerHTML = '<img u="image" src="whatSectionSliderImages/4.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML3').innerHTML = '<img u="image" src="whatSectionSliderImages/4.3.jpg" height="300px" width="500px"/>';

document.getElementById('ImagesHTML4').innerHTML = '<img u="image" src="whatSectionSliderImages/4.3.jpg" height="300px" width="500px" />';
            document.getElementById('ImagesHTML5').innerHTML = '<img u="image" src="whatSectionSliderImages/4.4.jpg" height="300px" width="500px" />';
            document.getElementById('ImagesHTML6').innerHTML = '<img u="image" src="whatSectionSliderImages/4.5.jpg" height="300px" width="500px"/>';

document.getElementById('ImagesHTML7').innerHTML = '<img u="image" src="whatSectionSliderImages/4.5.jpg" height="300px" width="500px" />';
            document.getElementById('ImagesHTML8').innerHTML = '<img u="image" src="whatSectionSliderImages/4.1.jpg" height="300px" width="500px" />';
            document.getElementById('ImagesHTML9').innerHTML = '<img u="image" src="whatSectionSliderImages/4.2.jpg" height="300px" width="600px"/>';

document.getElementById('ImagesHTML10').innerHTML = '<img u="image" src="whatSectionSliderImages/4.3.jpg" height="300px" width="500px" />';
            document.getElementById('ImagesHTML11').innerHTML = '<img u="image" src="whatSectionSliderImages/4.4.jpg" height="300px" width="500px" />';
            document.getElementById('ImagesHTML12').innerHTML = '<img u="image" src="whatSectionSliderImages/4.5.png" height="300px" width="500px"/>';

            $("#ArrowOne").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowThree").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowTwo").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowFive").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowSix").attr('src', "../images/consultImages/NotActive.png");

            $("#FirstDiv").css('background-color','#F2F2F2');
            $("#ThirdDiv").css('background-color','#F2F2F2');
            $("#SecondDiv").css('background-color','#F2F2F2');
            $("#FifthDiv").css('background-color','#F2F2F2');
            $("#SixthDiv").css('background-color','#F2F2F2');
           
        });

$("#FifthDiv").click(function() {

            if (flag==0){
                        $("#OneBig").slideToggle("fast");
            flag=1;
            
            }
            
            
            $("#ArrowFive").attr('src', "../images/consultImages/Active.png");
            
            $(this).css('background-color','#D3D3D3');

            document.getElementById("HeadOne").style.color = "gray";
            document.getElementById("HeadTwo").style.color = "gray";
            document.getElementById("HeadThree").style.color = "gray";
            document.getElementById("HeadFour").style.color = "gray";
            document.getElementById("HeadFive").style.color = "green";
            document.getElementById("HeadSix").style.color = "gray";
           
            document.getElementById('Text').innerHTML = 'Utility Approvals<br>Project Plans – Gantt<br>Procurement Schedules, BOQs<br>Site Supervision<br>EPC Management';

document.getElementById('ImagesHTML1').innerHTML = '<img u="image" src="whatSectionSliderImages/5.1.png" height="300px" width="500px" />';
            document.getElementById('ImagesHTML2').innerHTML = '<img u="image" src="whatSectionSliderImages/5.2.jpg" height="300px" width="600px" />';


document.getElementById('ImagesHTML3').innerHTML = '<img u="image" src="whatSectionSliderImages/5.3.png" height="300px" width="600px" />';

            document.getElementById('ImagesHTML4').innerHTML = '<img u="image" src="whatSectionSliderImages/5.4.png" height="300px" width="500px" />';            


document.getElementById('ImagesHTML5').innerHTML = '<img u="image" src="whatSectionSliderImages/5.1.png" height="300px" width="500px" />';

            document.getElementById('ImagesHTML6').innerHTML = '<img u="image" src="whatSectionSliderImages/5.2.jpg" height="300px" width="600px" />';            



document.getElementById('ImagesHTML7').innerHTML = '<img u="image" src="whatSectionSliderImages/5.3.png" height="300px" width="600px" />';

            document.getElementById('ImagesHTML8').innerHTML = '<img u="image" src="whatSectionSliderImages/5.4.png" height="300px" width="500px" />';            



document.getElementById('ImagesHTML9').innerHTML = '<img u="image" src="whatSectionSliderImages/5.1.png" height="300px" width="500px" />';

            document.getElementById('ImagesHTML10').innerHTML = '<img u="image" src="whatSectionSliderImages/5.2.jpg" height="300px" width="600px" />';            


document.getElementById('ImagesHTML11').innerHTML = '<img u="image" src="whatSectionSliderImages/5.3.png" height="300px" width="600px" />';

            document.getElementById('ImagesHTML12').innerHTML = '<img u="image" src="whatSectionSliderImages/5.4.png" height="300px" width="500px" />';            

            $("#ArrowOne").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowThree").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowFour").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowTwo").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowSix").attr('src', "../images/consultImages/NotActive.png");

            $("#FirstDiv").css('background-color','#F2F2F2');
            $("#ThirdDiv").css('background-color','#F2F2F2');
            $("#FourthDiv").css('background-color','#F2F2F2');
            $("#SecondDiv").css('background-color','#F2F2F2');
            $("#SixthDiv").css('background-color','#F2F2F2');
           
        });

$("#SixthDiv").click(function() {

            if (flag==0){
                        $("#OneBig").slideToggle("fast");
            flag=1;
            
            }
            
            
            $("#ArrowSix").attr('src', "../images/consultImages/Active.png");
            
            $(this).css('background-color','#D3D3D3');

            document.getElementById("HeadOne").style.color = "gray";
            document.getElementById("HeadTwo").style.color = "gray";
            document.getElementById("HeadThree").style.color = "gray";
            document.getElementById("HeadFour").style.color = "gray";
            document.getElementById("HeadFive").style.color = "gray";
            document.getElementById("HeadSix").style.color = "green";
           
            document.getElementById('Text').innerHTML = 'Commissioning Support<br>Acceptance Tests<br>Monitoring Schemes<br>Operations and Maintenance Plans<br>Integration with Building Management<br>Training';

document.getElementById('ImagesHTML1').innerHTML = '<img u="image" src="whatSectionSliderImages/6.1.png" height="300px" width="600px" />';

document.getElementById('ImagesHTML2').innerHTML = '<img u="image" src="whatSectionSliderImages/6.2.png" height="300px" width="350px" />';

document.getElementById('ImagesHTML3').innerHTML = '<img u="image" src="whatSectionSliderImages/6.1.png" height="300px" width="600px" />';          

document.getElementById('ImagesHTML4').innerHTML = '<img u="image" src="whatSectionSliderImages/6.2.png" height="300px" width="350px" />';

document.getElementById('ImagesHTML5').innerHTML = '<img u="image" src="whatSectionSliderImages/6.1.png" height="300px" width="600px" />';          

document.getElementById('ImagesHTML6').innerHTML = '<img u="image" src="whatSectionSliderImages/6.2.png" height="300px" width="350px" />';

document.getElementById('ImagesHTML7').innerHTML = '<img u="image" src="whatSectionSliderImages/6.1.png" height="300px" width="600px" />';          

document.getElementById('ImagesHTML8').innerHTML = '<img u="image" src="whatSectionSliderImages/6.2.png" height="300px" width="350px" />';

document.getElementById('ImagesHTML9').innerHTML = '<img u="image" src="whatSectionSliderImages/6.1.png" height="300px" width="600px" />';          

document.getElementById('ImagesHTML10').innerHTML = '<img u="image" src="whatSectionSliderImages/6.2.png" height="300px" width="350px" />';


document.getElementById('ImagesHTML11').innerHTML = '<img u="image" src="whatSectionSliderImages/6.1.png" height="300px" width="600px" />';          

document.getElementById('ImagesHTML12').innerHTML = '<img u="image" src="whatSectionSliderImages/6.2.png" height="300px" width="350px" />';

            $("#ArrowOne").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowThree").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowFour").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowFive").attr('src', "../images/consultImages/NotActive.png");
            $("#ArrowTwo").attr('src', "../images/consultImages/NotActive.png");

            $("#FirstDiv").css('background-color','#F2F2F2');
            $("#ThirdDiv").css('background-color','#F2F2F2');
            $("#FourthDiv").css('background-color','#F2F2F2');
            $("#FifthDiv").css('background-color','#F2F2F2');
            $("#SecondDiv").css('background-color','#F2F2F2');
           
        });


















 $("#MoreButton").click(function() {
 $('html, body').animate({
        scrollTop: $("#imagesSection").offset().top
    }, 500);

            $("#MoreimagesSection").slideToggle("fast");

            $(this).hide();
$(".sideDiv").hide();



    });
    

});