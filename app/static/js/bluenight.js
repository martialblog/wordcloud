var WEB_SOCKET_SWF_LOCATION = "/static/WebSocketMain.swf";
var WEB_SOCKET_DEBUG = true;

var socket = io.connect('/cloud');

////////////////////////////////////
// OnLoad
////////////////////////////////////

$(window).load(function() {
    socket.emit('get list');
});


////////////////////////////////////
// Define Events
////////////////////////////////////

socket.on('wordio', function(data) {
    updateWord(data.theword, data.count, data.isnewword);
});

socket.on('listio', function(data) {
    updateCloud(data);
});


////////////////////////////////////
// Event Handlers
////////////////////////////////////

function updateWord(word, weight, isNew) {
    if (isNew) {
        tags.push({
            key: word,
            value: weight
        });
    } else {
        tags.forEach(function(d) {
            if (d.key == word) {
                d.value = weight;
            }
        });
    }
    generate();
}


function updateCloud(cloudData) {
    tags = d3.entries(cloudData).sort(function(a, b) {
        return b.value - a.value;
    });
    generate();
}
