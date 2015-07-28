
var str = ["HELLO WORLD, HELLO, HELLO, MOTHERFUCKING WORLD!!!", "BUT YOU ARE DEVELOPER", "CEEP CALM AND DEBUG YOUR CODE", "STUPID JAVA!!!", "f=ma", "REQUEST - RESPONSE", "DEADLINE", "TESTERS GONNA TEST", "I'M NOT RESPONSIBLE FOR THIS CODE. THEY FORCED ME TO WRITE IT AGAINST MY WILL", "MAGIC DO NOT TOUCH!!!", "If you're reading this, then you moved to my last project. I'm sorry. Good luck!"];
var colours = ["#a67d63", "#bcada3", "#d8ccf6", "#d8efb4", "#ff4c2d"];
$(document).ready(function() {
    $('.button').on("click", function () {
        $('#text').text(str[Math.floor(Math.random()*str.length)]);
        $('body').css("background-color", colours[Math.floor(Math.random()*colours.length)])
        $('#text').addClass('animated flipInX');
        setTimeout(function(){
            $('#text').removeClass();
        }, 1050);
        });
 });
