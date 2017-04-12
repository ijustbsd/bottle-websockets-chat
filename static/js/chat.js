var nick = prompt('Введите Ваше имя:', '') || new Date().getTime().toString();
$("#user-menu p").html(nick);

var ws = new WebSocket("ws://" + location.host + "/websocket");

var clients = [];
var msg = {};

ws.onmessage = function (event) {
    msg = JSON.parse(event.data);
    if (clients.indexOf(msg.user) == -1) {
        clients.push(msg.user);
        $("#dialogs-list ul").append("<li id='" + msg.user + "' " + (nick == msg.user ? " class='selected'" : "") + "><img src='https://lorempixel.com/54/54/cats/' alt='' class='avatar online'><p class='username'>" + msg.user + "</p><p class='last-msg'>Ex aliquam optio quae odio.</p></li>");
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
    $("#messages-list ul").append("<li><div class='msg " + ((nick == msg.user) ? '' : 'to-me') + "'>\
        <p class='text'><b>" + msg.user +"</b>:<br />" + msg.text + "</p>\
        <p class='time'>" + time + "</p></div></li>");
    $("#messages-list").stop().animate({
        scrollTop: $('#messages-list')[0].scrollHeight
    }, 800);
};

$(document).keypress(function(event) {
    if (event.which == 13)
        $("#send-button").trigger('click');
});

$("#send-button").click(function(event) {
    msg['user'] = nick;
    msg['text'] = $("#input-msg").val();
    if (/\S/.test(msg.text))
        ws.send(JSON.stringify(msg));
    $("#input-msg").val("");
    textAreaInit();
});
