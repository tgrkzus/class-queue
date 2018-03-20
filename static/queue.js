names = []

var socket;

function setup() {
    socket = io.connect('http://' + document.domain + ':' + location.port);

    // socket.on('connect', function() {
    //     socket.emit('add_name', {name: "Tom"});
    // });


    socket.on('add_name', add_name);

}

function refresh_list() {
    $("#list").empty();
    for (var i = 0; i < names.length; i++) {
        $("#list").append('<p>' + names[i]['name'] + '</p>');
    }
}

function register_new_name() {
    var name = $('#name-input').val()
    socket.emit('add_name', {name: name});
}

var add_name = function(event) {
    names.push({'id': event['id'], 'name': event['name']});
    refresh_list()
}

var remove_name = function(evemt) {
    for (var i = 0; i < names.length; i++) {
        if (names[i]["id"] == id) {
            names.splice(names.indexof(names[i], 1));
        }
    }
    refresh_list();
}
