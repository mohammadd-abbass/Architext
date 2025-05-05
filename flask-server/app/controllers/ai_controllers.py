from flask import Blueprint, request, jsonify
from models.classes import generateCommentsRequestModel, calculateComplexityRequestModel, CheckArchitectureRequestModel
from services.ai_controller_service import generate_function_comments, calculate_function_complexity, check_project_architecture, AnalyzeFileArchitectureRequestModel
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


    
@ai.route("/checkArchitecture", methods=["POST"])
def check_architecture():
    try:
        data = CheckArchitectureRequestModel(**request.get_json())
        print(data)
    except ValidationError as e:
        return  jsonify({'error': str(e)}), 400

    files = data.files
    reference = data.referenceArchitecture

    try:
        result = check_project_architecture(files, reference)
        return jsonify({"result": result})
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500


@ai.route("/analyze", methods=["POST"])
def analyze_file_architecture():
    try:
        data = AnalyzeFileArchitectureRequestModel(**request.get_json())
    except ValidationError as e:
        return jsonify({"error": str(e)}), 400

    file_code = data.code
    reference = data.referenceArchitecture

    try:
        from services.ai_controller_service import analyze_file_against_architecture
        result = analyze_file_against_architecture(file_code, reference)
        return jsonify({"result": result})
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500