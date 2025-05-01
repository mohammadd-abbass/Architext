from flask import Blueprint, request, jsonify
from models.classes import generateCommentsRequestModel, calculateComplexityRequestModel
from services.ai_controller_service import generate_function_comments, calculate_function_complexity
from pydantic import ValidationError

ai = Blueprint("ai", __name__)

@ai.route("/generateComments", methods=["POST"])
def generate_comments():
    try:
        body = generateCommentsRequestModel(**request.get_json())
    except ValidationError as e:
        print(e)
        return jsonify({"error": str(e)}), 400

    code = body.code
    language = body.language

    if not code:
        return jsonify({"error": "No code provided"}), 400
    
    try:
        result = generate_function_comments(code, language)
        return jsonify({"code": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@ai.route("/calculateComplexity", methods=["POST"])
def calculate_complexity():
    try:
        body = calculateComplexityRequestModel(**request.get_json())
    except ValidationError as e:
        print(e)
        return jsonify({"error": str(e)}), 400

    code = body.code
    language = body.language

    if not code:
        return jsonify({"error": "No code provided"}), 400
    
    try:
        result = calculate_function_complexity(code, language)
        return jsonify({"code": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
