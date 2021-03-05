$(document).ready(function(){



    
    $(".tab-content div").hide();
    


    $(".tab li").click(function(){

       

        var indis = $(this).index();
        

        $(".tab-content div").hide();
        $(".tab-content div:eq("+indis+")").slideDown(500);
        $(".tab li").removeClass("active");
        $(".tab li:eq("+indis+")").addClass("active");


    })





})


  
