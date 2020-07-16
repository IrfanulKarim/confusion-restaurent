$(document).ready(function(){
    $("#mycarousel").carousel({
        interval: 2000
    });

    $("#carouselButton").click(function(){
        if($("#carouselButton").children('span').hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children('span').removeClass("fa-pause");
            $("#carouselButton").children('span').addClass("fa-play");
        }
        else{
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children('span').removeClass("fa-play");
            $("#carouselButton").children('span').addClass("fa-pause");
        }
       
    });

    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });


    // Reserve Modal

    $("#reserveModalButton").click(function(){
        $("#reserveModal").modal('show');
    });

    $("#reserveModalDismiss").click(function(){
        $("#reserveModal").modal('hide');
    });

    $("#reserveModalCancel").click(function(){
        $("#reserveModal").modal('hide');
    })


    // Login Modal

    $("#loginModalButton").click(function(){
        $("#loginModal").modal('show');
    });

    $("#loginModalClose").click(function(){
        $("#loginModal").modal('hide');
    });

    $("#loginModalCancel").click(function(){
        $("#loginModal").modal('hide');
    });




});