from flask import Blueprint, request, jsonify
from models.classes import generateCommentsRequestModel, calculateComplexityRequestModel, CheckArchitectureRequestModel, AnalyzeFileArchitectureRequestModel
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

    print(code)
    print(language)

    if not code:
        return jsonify({"error": "No code provided"}), 400
    
    try:
        from services.ai_controller_services.ai_controller_service_v2 import generate_function_comments
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
        from services.ai_controller_services.ai_controller_service_v2 import calculate_function_complexity
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
        from services.ai_controller_services.ai_controller_service_v2 import check_project_architecture
        result = check_project_architecture(files, reference)
        return jsonify({"result": result})
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500


@ai.route("/analyze", methods=["POST"])
def analyze_file_architecture():
    try:
        print(request.get_json()),
        data = AnalyzeFileArchitectureRequestModel(**request.get_json())
    except ValidationError as e:
        return jsonify({"error": str(e)}), 400

    code = data.code
    language = data.language
    reference = data.referenceArchitecture

    print(code)
    print(language)
    print(reference)

    try:
        from services.ai_controller_services.ai_controller_service_v2 import analyze_file_against_architecture
        result = analyze_file_against_architecture(code, language, reference)
        return jsonify({"result": result})
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500
    

@ai.route("/generateConfig", methods=["POST"])
def generate_config():
    try:
        data = request.get_json()
        config = data.get("config")
    except ValidationError as e:
        return jsonify({"error": str(e)}), 400

    if not config:
        return jsonify({"error": "No config provided"}), 400

    try:
        from services.ai_controller_services.ai_controller_service_v2 import generate_config
        result = generate_config(config)
        return jsonify({"result": result})
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500
    