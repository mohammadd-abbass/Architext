from flask import Blueprint, request, jsonify
from models.classes import generateCommentsRequestModel
from services.ai_controller_service import generate_function_comments

ai = Blueprint("ai", __name__)

@ai.route("/generateComments", methods=["POST"])
def generate_comments(body: generateCommentsRequestModel):
    code = body.code
    language = body.language

    if not code:
        return jsonify({ "error": "No code provided"}), 400
    
    result = generate_function_comments(code, language)
    return jsonify({ "code": result })