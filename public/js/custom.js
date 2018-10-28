$(document).ready(function(){
    $(".top-icons").mouseenter(function(){
        $(this).addClass("pulse");
    });
    $(".top-icons").mouseleave(function(){
        $(this).removeClass("pulse");
    });
});