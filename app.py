from flask import Flask, render_template
from flask_socketio import SocketIO
app = Flask(__name__, static_folder="static")

socketio = SocketIO(app)

## the currentId of the user
currentId = 0

## Current Queue
queue = []

## name: "Firtname LastName"

@socketio.on('add_name')
def add_name(json):
    global currentId
    global queue
    studentid = currentId
    currentId += 1
    queue.append({"id": studentid, "name": json["name"]})
    print("received json: " + str(json))

@socketio.on('remove_name')
def remove_name(id):
    for i in range(0,len(queue)):
        if id == queue[i]["id"]:
            emit('remove_name', queue.pop(i), boradcast = True)

@app.route("/")
def hello():
    print("Connected!!")
    return render_template("index.html")
