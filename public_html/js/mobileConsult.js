$(document).ready(
    function() {
        $("#FirstMobileDiv").click(function() {
            
            $("#DropOne").slideDown("slow");
            
            $("#MArrowOne").attr('src', "images/consultImages/Active.png");
            
            $(this).css('background-color','#D3D3D3');

            document.getElementById("MHeadOne").style.color = "green";
});

$("#SecondMobileDiv").click(function() {
            
            $("#DropTwo").slideDown("slow");
            
            $("#MArrowTwo").attr('src', "images/consultImages/Active.png");
            
            $(this).css('background-color','#D3D3D3');

            document.getElementById("MHeadTwo").style.color = "green";
});

$("#ThirdMobileDiv").click(function() {
            
            $("#DropThree").slideDown("slow");
            
            $("#MArrowThree").attr('src', "images/consultImages/Active.png");
            
            $(this).css('background-color','#D3D3D3');

            document.getElementById("MHeadThree").style.color = "green";
});

$("#FourthMobileDiv").click(function() {
            
            $("#DropFour").slideDown("slow");
            
            $("#MArrowFour").attr('src', "images/consultImages/Active.png");
            
            $(this).css('background-color','#D3D3D3');

            document.getElementById("MHeadFour").style.color = "green";
});

$("#FifthMobileDiv").click(function() {
            
            $("#DropFive").slideDown("slow");
            
            $("#MArrowFive").attr('src', "images/consultImages/Active.png");
            
            $(this).css('background-color','#D3D3D3');

            document.getElementById("MHeadFive").style.color = "green";
});

$("#SixthMobileDiv").click(function() {
            
            $("#DropSix").slideDown("slow");
            
            $("#MArrowSix").attr('src', "images/consultImages/Active.png");
            
            $(this).css('background-color','#D3D3D3');

            document.getElementById("MHeadSix").style.color = "green";
});



 $("#MobileMoreButton").click(function() {
 

            $("#MoreMobileimagesSection").slideDown("slow");

            $(this).hide();

            $(".sideDiv").hide();

    });
}); 