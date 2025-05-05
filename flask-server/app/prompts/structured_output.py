ARCHITECTURE_CHECK = {
    "format": {
        "type": "json_schema",
        "name": "project_structure_report",
        "schema": {
            "type": "object",
            "properties": {
                "summary": {
                    "type": "string",
                    "description": "A brief summary of the violations found.",
                },
                "issues": {
                    "type": "array",
                    "description": "List of issues identified in the project structure.",
                    "items": {
                        "type": "object",
                        "properties": {
                            "type": {
                                "type": "string",
                                "description": "Type of the issue (e.g., missing-folder, misplaced-file, extraneous-folder).",
                            },
                            "expectedPath": {
                                "type": ["string", "null"],
                                "description": "The expected path for the file or folder.",
                            },
                            "filePath": {
                                "type": ["string", "null"],
                                "description": "The actual file path if applicable.",
                            },
                            "folderPath": {
                                "type": ["string", "null"],
                                "description": "The actual folder path if applicable.",
                            },
                            "message": {
                                "type": "string",
                                "description": "Detailed message about the issue.",
                            },
                            "suggestion": {
                                "type": "string",
                                "description": "Suggested action to resolve the issue.",
                            },
                        },
                        "required": [
                            "type",
                            "expectedPath",
                            "filePath",
                            "folderPath",
                            "message",
                            "suggestion",
                        ],
                        "additionalProperties": False,
                    },
                },
                "recommendedStructure": {
                    "type": "object",
                    "description": "Recommended project folder structure.",
                    "properties": {
                        "src": {
                            "type": "object",
                            "properties": {
                                "controllers": {
                                    "type": "object",
                                    "properties": {},
                                    "required": [],
                                    "additionalProperties": False,
                                },
                                "services": {
                                    "type": "object",
                                    "properties": {},
                                    "required": [],
                                    "additionalProperties": False,
                                },
                                "models": {
                                    "type": "object",
                                    "properties": {},
                                    "required": [],
                                    "additionalProperties": False,
                                },
                                "utils": {
                                    "type": "object",
                                    "properties": {},
                                    "required": [],
                                    "additionalProperties": False,
                                },
                                "routes": {
                                    "type": "object",
                                    "properties": {},
                                    "required": [],
                                    "additionalProperties": False,
                                },
                            },
                            "required": [
                                "controllers",
                                "services",
                                "models",
                                "utils",
                                "routes",
                            ],
                            "additionalProperties": False,
                        },
                        "tests": {
                            "type": "object",
                            "properties": {},
                            "required": [],
                            "additionalProperties": False,
                        },
                        "public": {
                            "type": "object",
                            "properties": {},
                            "required": [],
                            "additionalProperties": False,
                        },
                        "package.json": {
                            "type": "object",
                            "properties": {},
                            "required": [],
                            "additionalProperties": False,
                        },
                    },
                    "required": ["src", "tests", "public", "package.json"],
                    "additionalProperties": False,
                },
            },
            "required": ["summary", "issues", "recommendedStructure"],
            "additionalProperties": False,
        },
    }
}


FILE_ARCHITECTURE_CHECK = {
    
}
