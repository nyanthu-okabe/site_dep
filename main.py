from flask import Flask, render_template, send_from_directory

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<page>/')
def show(page):
    try:
        return render_template(f'{page}/index.html')
    except:
        return render_template('404.html'), 404

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)
