$(document).ready(function () {
    $("li").hover(function(){
        $(this).css("font-weight", "bold");
    }, function(){
        $(this).css("font-weight", "normal");
    });
})




/*
$("li").hover(function(){
    $(this).css("background-color", "yellow");
}, function(){
    $(this).css("color", "pink");
});*/
