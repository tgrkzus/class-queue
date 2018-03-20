short_names = []
long_names = []

function setup() {
    var socket = io.connect('http://' + document.domain + ':' + location.port);

    socket.on('connect', function() {
        socket.emit('data', {data: "Hello"});
    });
}

var add_name = function(type, id, name) {
    if (type == "short") {
        short_names.push({'id': id, 'name': name});
    }

    if (type == "long") {
        long_names.push({'id': id, 'name': name});
    }
}

var remove_name = function(type, id) {
    if (type == "short") {
        for (var i = 0; i < short_names.length; i++) {
            if (short_names[i]["id"] == id) {
                short_names.splice(short_names.indexof(short_names[i], 1));
            }
        }
    }
    if (type == "long") {

    }
}
