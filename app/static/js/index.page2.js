var WEB_SOCKET_SWF_LOCATION = "/static/WebSocketMain.swf";
var WEB_SOCKET_DEBUG = true;

var socket = io.connect('/cloud');

socket.on('wordio', function(msg) {
  $("#list").append('<p><span>' + msg.theword + ", " + msg.count + '</span></p>');
  return false;
});

function addMsg(msg, type) {
  var alert_id = Math.floor(Math.random() * 1000);

  var class;
  if (type == 1)
    class = "alert";
  else
    class = "success";

  $('#alerts').addClass('alert-success').append("<div class='" + class + "' id='alert-" + alert_id + "'>" + msg + "</div>");
  $("#alert-" + alert_id).fadeTo(10000, 0).animate({
    height: 0,
    padding: 0,
    margin: 0
  }, 2000, function() {
    $(this).remove();
  });
}

socket.on('errorio', function(msg) {
  alert("muuuh");
  var errmsg;

  if (msg == "1") // common word
    errmsg = "Versuch etwas kreativer zu sein!";
  else if (msg == "2") // special char
    errmsg = "Bitte vermeide Sonderzeichen und Zahlen.";
  else if (msg == "3") // word too long
    errmsg = "Dein Wort ist zu lang.";
  else if (msg == "4") // sentence
    errmsg = "Leerzeichen sind verboten!";
  else if (msg == "5") // forbidden word
    errmsg = "Keine bösen Wörter!";
  else if (msg == "99") // unknown
    errmsg = "Unbekannter Fehler! Bitte David holen!";

  alert(errmsg);
  addMsg(errmsg, 1);

  return false;
});

/*socket.on('listio', function(msg) {
  $("#list").empty();
  for (var key in msg) {
    if (msg.hasOwnProperty(key)) {
      $("#list").append('<p><span>' + key + ', ' + msg[key] + '</span></p>');
    }
  }
  return false;
});*/


$(document).ready(function() {

  $('#submission-form').submit(function(msg) {
    socket.emit('user message', $('#message').val());
    $('#message').val('').focus();
    alert("kekekeke");
    //addMsg("lele", 2);
    return false;
  });

  $("#submit-btn").click(function() {
    $("#submission-form").submit();
  });

  $("#submission-form input").blur(function() {
    setTimeout(function() {
      $("#submission-form input").first().focus();
    }, 500);
  });

});