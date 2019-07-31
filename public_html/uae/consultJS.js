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

           
            document.getElementById('Text').innerHTML = 'Site Assessment<br>Energy Study<br>GIS Mapping<br>Shadow Analysis<br>                                                    Technology Identification';



            document.getElementById('ImagesHTML1').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/1.1.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML2').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/1.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML3').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/1.3.jpg" height="300px" width="600px" />';
   
            document.getElementById('ImagesHTML4').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/1.1.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML5').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/1.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML6').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/1.3.jpg" height="300px" width="600px" />';

            document.getElementById('ImagesHTML7').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/1.1.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML8').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/1.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML9').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/1.3.jpg" height="300px" width="600px" />';

            document.getElementById('ImagesHTML10').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/1.1.png" height="300px" width="600px" />';
            document.getElementById('ImagesHTML11').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/1.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML12').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/1.3.jpg" height="300px" width="600px" />';
          




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
           
            document.getElementById('Text').innerHTML = 'Feasibility<br>Full Investment Model<br> Lease model<br>IPP Projects<br>CBA, ROI, Paybacks etc.';


            document.getElementById('ImagesHTML1').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/2.1.png" height="300px" width="500px" />';
            document.getElementById('ImagesHTML2').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/2.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML3').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/2.3.jpg" height="300px" width="500px" />';

document.getElementById('ImagesHTML4').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/2.1.png" height="300px" width="500px" />';
            document.getElementById('ImagesHTML5').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/2.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML6').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/2.3.jpg" height="300px" width="500px" />';

document.getElementById('ImagesHTML7').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/2.1.png" height="300px" width="500px" />';
            document.getElementById('ImagesHTML8').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/2.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML9').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/2.3.jpg" height="300px" width="500px" />';

document.getElementById('ImagesHTML10').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/2.1.png" height="300px" width="500px" />';
            document.getElementById('ImagesHTML11').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/2.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML12').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/2.3.jpg" height="300px" width="500px" />';

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
           
            document.getElementById('Text').innerHTML = 'Constructive Design<br>Grid Integration Design<br> MV/HV Connection<br> Outdoor Container Solution';


            document.getElementById('ImagesHTML1').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/3.1.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML2').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/3.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML3').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/3.3.jpg" height="300px" width="600px" />';

            document.getElementById('ImagesHTML4').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/3.4.jpg" height="300px" width="450px" />';

 document.getElementById('ImagesHTML5').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/3.1.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML6').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/3.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML7').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/3.3.jpg" height="300px" width="600px" />';

            document.getElementById('ImagesHTML8').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/3.4.jpg" height="300px" width="450px" />';

 document.getElementById('ImagesHTML9').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/3.1.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML10').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/3.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML11').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/3.3.jpg" height="300px" width="600px" />';

            document.getElementById('ImagesHTML12').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/3.4.jpg" height="300px" width="450px" />';

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
           
            document.getElementById('Text').innerHTML = 'Drafting project specifications<br> Local standards compliance<br> Tendering and evaluation';

document.getElementById('ImagesHTML1').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/4.1.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML2').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/4.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML3').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/4.3.png" height="300px" width="600px"/>';

document.getElementById('ImagesHTML4').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/4.1.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML5').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/4.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML6').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/4.3.png" height="300px" width="600px"/>';

document.getElementById('ImagesHTML7').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/4.1.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML8').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/4.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML9').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/4.3.png" height="300px" width="600px"/>';

document.getElementById('ImagesHTML10').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/4.1.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML11').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/4.2.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML12').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/4.3.png" height="300px" width="600px"/>';

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
           
            document.getElementById('Text').innerHTML = 'Approvals and Permits<br> Managing EPC<br>Health and Safety';

document.getElementById('ImagesHTML1').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/5.1.jpg" height="300px" width="600px" />';
            document.getElementById('ImagesHTML2').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/5.2.jpg" height="300px" width="600px" />';


document.getElementById('ImagesHTML3').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/5.1.jpg" height="300px" width="600px" />';

            document.getElementById('ImagesHTML4').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/5.2.jpg" height="300px" width="600px" />';            


document.getElementById('ImagesHTML5').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/5.1.jpg" height="300px" width="600px" />';

            document.getElementById('ImagesHTML6').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/5.2.jpg" height="300px" width="600px" />';            



document.getElementById('ImagesHTML7').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/5.1.jpg" height="300px" width="600px" />';

            document.getElementById('ImagesHTML8').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/5.2.jpg" height="300px" width="600px" />';            



document.getElementById('ImagesHTML9').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/5.1.jpg" height="300px" width="600px" />';

            document.getElementById('ImagesHTML10').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/5.2.jpg" height="300px" width="600px" />';            


document.getElementById('ImagesHTML11').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/5.1.jpg" height="300px" width="600px" />';

            document.getElementById('ImagesHTML12').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/5.2.jpg" height="300px" width="600px" />';            

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
           
            document.getElementById('Text').innerHTML = 'Plant Monitoring<br> Training <br>Maintenance Plans';

document.getElementById('ImagesHTML1').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/6.1.png" height="300px" width="600px" />';

document.getElementById('ImagesHTML2').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/6.3.png" height="300px" width="350px" />';

document.getElementById('ImagesHTML3').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/6.1.png" height="300px" width="600px" />';          

document.getElementById('ImagesHTML4').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/6.3.png" height="300px" width="350px" />';

document.getElementById('ImagesHTML5').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/6.1.png" height="300px" width="600px" />';          

document.getElementById('ImagesHTML6').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/6.3.png" height="300px" width="350px" />';

document.getElementById('ImagesHTML7').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/6.1.png" height="300px" width="600px" />';          

document.getElementById('ImagesHTML8').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/6.3.png" height="300px" width="350px" />';

document.getElementById('ImagesHTML9').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/6.1.png" height="300px" width="600px" />';          

document.getElementById('ImagesHTML10').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/6.3.png" height="300px" width="350px" />';


document.getElementById('ImagesHTML11').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/6.1.png" height="300px" width="600px" />';          

document.getElementById('ImagesHTML12').innerHTML = '<img u="image" src="../images/consultImages/ImageSlider/6.3.png" height="300px" width="350px" />';

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