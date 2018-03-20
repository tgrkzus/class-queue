short_names = []
long_names = []

function setup() {
    var socket = new WebSocket("ws://" + location.host + "/data")

    socket.onmessage = function(event) {
        console.log(event.data);
    }
}

var add_name = function(type, id, name) {
    if (type == "short") {
        short_names.push([id, name]);
    }

    if (type == "long") {
        short_names.push([id, name]);
    }
}

var remove_name = function(type, id) {
    if (type == "short") {

    }
    if (type == "long") {

    }
}
