
var str = ["Сейчас точно вверх пойдет!", "Поставлю в 2 раза больше и точно отиграюсь","Два месяца и на квартиру заработаю, как два пальца об асфальт", 'Опять депозит слил', 'Учить для слабых, я хочу деньги сдесь и сейчас'];
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
