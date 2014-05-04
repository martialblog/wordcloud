var WEB_SOCKET_SWF_LOCATION = "/static/WebSocketMain.swf";
var WEB_SOCKET_DEBUG = true;

var socket = io.connect('/cloud');
var password;
var password_error = true;

socket.on('listio', function(msg) {
  $("#list").empty();
  for (var key in msg) {
    if (msg.hasOwnProperty(key)) {
      var newEntry = $('<div class="small-9 columns"><div class="panel">' + key + '</div></div>');
      var newDeleteBtn = $('<div class="small-3 columns"><div class="button expand delword" value="' + key + '">Delete</div></div>');

      newDeleteBtn.find(".button").click(function() {
        if (!password_error) {
          var really = confirm("really delete \"" + $(this).attr("value") + "\"?");

          if (really) {
            alert($(this).attr("value") + " was deleted");
            socket.emit('delete word', {
              word: $(this).attr("value"),
              password: password
            });
            socket.emit('get list');
          }
        }
      });

      $("#list").append(newEntry.add(newDeleteBtn));
    }
  }
});

socket.on('wordio', function() {
  socket.emit('get list');
});

socket.on('passerror', function() {
  password_error = true;
  getPassword(true);
});

$(document).ready(function() {

  $("#viewlist").change(function() {
    $("#list").toggle();
  });

  $("#refresh-btn").click(function() {
    socket.emit('get list');
  });

  getPassword(false);
});

function getPassword(wasWrong) {
  if (!wasWrong)
    password = prompt("Bitte passwort eingeben", "");
  else
    password = prompt("Falsches Passwort!\nBitte erneut eingeben", "");

  password_error = false;
  socket.emit("checkpassword", password);
}