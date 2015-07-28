$(document).ready(function() {
	$('#demo').addClass('animated hinge');
});
var str = ["Hello world!!!!!!!!!", "lol", "tizh programmer", "fuck yeah!"];

function myFunction() {
    document.getElementById("demo").innerHTML = str[Math.floor(Math.random()*str.length)];
};
