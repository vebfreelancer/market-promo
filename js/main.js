// Accordeon
$(document).ready(function(){
    $(".set > a").on("click", function(){
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            $(this).siblings('.content').slideUp(200);
            $(".set > a i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
        else{
            $(".set > a i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $(this).find("i").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $('.content').slideUp(200);
            $(this).siblings('.content').slideDown(200);
        }
        return false
    });

    // Burger

    $('.menu-mobile .button').click(function(event) {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
        return false;
    });
});