from flask import Flask

app = Flask(__name__)

@app.route('/home')
def home():
    return {
        "buttons": {
            "labels" : [
                "Data Processing",
                "Production Dashboard",
                "To Be Determined"
            ],
            "urls": {
                "Data Processing": "data-processing",
                "Production Dashboard": "production-dashboard",
                "To Be Determined": "tbd"
            }
        }
    }

if __name__ == "__main__":
    app.run(debug=True)