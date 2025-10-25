from flask import Flask, render_template, send_from_directory

app = Flask(__name__, template_folder="templates")


@app.route("/")
def index():
    user = {"activate": False, "name": "John Doe"}
    return render_template("index.html", user=user)


@app.route("/<page>/")
def show(page):
    user = {"activate": True, "name": "John Doe"}
    try:
        return render_template(f"{page}/index.html", user=user)
    except:
        return render_template("404.html"), 404


@app.route("/static/<path:path>")
def send_static(path):
    return send_from_directory("static", path)


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404


if __name__ == "__main__":
    app.run(debug=True)
