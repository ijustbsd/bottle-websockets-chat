var nick = prompt('Введите Ваше имя:', '') || new Date().getTime().toString();
$("#user-menu p").html(nick);

var ws = new WebSocket("ws://" + location.host + "/websocket");

var clients = [];

ws.onmessage = function (event) {
    var i = event.data.indexOf(":");
    var user = event.data.substr(0, i);
    var text = event.data.substr(i + 1);

    if (clients.indexOf(user) == -1) {
        clients.push(user);
        $("#dialogs-list ul").append("<li id='" + user + "' " + (nick == user ? " class='selected'" : "") + "><img src='https://lorempixel.com/54/54/cats/' alt='' class='avatar online'><p class='username'>" + user + "</p><p class='last-msg'>Ex aliquam optio quae odio.</p></li>");
        $("#dialogs-list").stop().animate({
        scrollTop: $('#dialogs-list')[0].scrollHeight
    }, 800);
    };
    if (! /\S/.test(msg.text))
        return;
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var time = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m);
    $("#messages-list ul").append("<li><div class='msg " + ((nick == user) ? '' : 'to-me') + "'><p class='text'><b>" + user +"</b>:<br />" + text + "</p><p class='time'>" + time + "</p></div></li>");
    $("#messages-list").stop().animate({
        scrollTop: $('#messages-list')[0].scrollHeight
    }, 800);
};

$(document).keypress(function(event) {
    if (event.which == 13)
        $("#send-button").trigger('click');
});

$("#send-button").click(function(event) {
    if (/\S/.test($("#input-msg").val()))
        ws.send(nick + ":" + $("#input-msg").val());
    $("#input-msg").val("");
    textAreaInit();
});
