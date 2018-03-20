from flask import Flask, render_template
app = Flask(__name__, static_folder="static")

socketio = SocketIO(app)


@socketio.on('json')
def handle_json(json):
    print("received json: " + str(json))

@app.route("/")
def hello():
    print("Helo World")
    return render_template("index.html")
