from flask import Flask, render_template,send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

# Serve sitemap.xml
@app.route("/sitemap.xml")
def sitemap():
    return send_from_directory("static", "sitemap.xml")

@app.route("/robots.txt")
def robots():
    return send_from_directory("static", "robots.txt")

if __name__ == '__main__':
    app.run(debug=True)


# venv\Scripts\activate
# python app.py
