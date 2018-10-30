$(document).ready(function(){
    $(".top-icons").mouseenter(function(){
        $(this).addClass("pulse");
    });
    $(".top-icons").mouseleave(function(){
        $(this).removeClass("pulse");
    });

    $(".call").mouseenter(function(){
        $(this).addClass("pulse");
    });
    $(".call").mouseleave(function(){
        $(this).removeClass("pulse");
    });

    $(".card").mouseenter(function(){
        $(this).addClass("pulse");
    });
    $(".card").mouseleave(function(){
        $(this).removeClass("pulse");
    });
});