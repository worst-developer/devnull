
var str = ["Hello world!!!!!!!!!", "lol", "tizh programmer", "fuck yeah!"];
//
//function myFunction() {
//    document.getElementById("demo").innerHTML = str[Math.floor(Math.random()*str.length)];
////    $(document).ready(function() {
//        $('#demo').addClass('animated hinge');
//        $(this).removeClass('animated hinge');
//    })};
////$(document).ready(function() {
////    $('.button').on("click", function() {
////        $(this).addClass('animated hinge').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd", function(){
////            $(this).removeClass();
////        });
////    });
////});
//////$(document).ready(function() {
////
//////});

$(document).ready(function() {
    $('.button').on("click", function () {
        $('#text').text(str[Math.floor(Math.random()*str.length)]);
        $('#text').addClass('animated bounce').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass();
        });
        });
 });
