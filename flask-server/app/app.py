from flask import Flask
from flask_cors import CORS
from controllers.ai_controllers import ai

app = Flask(__name__)
CORS(app)

app.register_blueprint(ai, url_prefix = "/ai")

if __name__ == "_main_":
    app.run(host="0.0.0.0", port=5000)
