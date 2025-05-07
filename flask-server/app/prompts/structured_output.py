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
    "format": {
        "type": "json_schema",
        "name": "file_architecture_check",
        "schema": {
            "type": "object",
            "properties": {
                "diagnostics": {
                    "type": "array",
                    "description": "A list of diagnostics found in the code.",
                    "items": {
                        "type": "object",
                        "properties": {
                            "message": {
                                "type": "string",
                                "description": "Description of the diagnostic issue."
                            },
                            "severity": {
                                "type": "string",
                                "enum": ["info", "warning", "error"],
                                "description": "Severity level of the diagnostic."
                            },
                            "line": {
                                "type": "integer",
                                "description": "Line number where the issue occurs."
                            },
                            "range": {
                                "type": "object",
                                "description": "Character range for the issue.",
                                "properties": {
                                    "start": {
                                        "type": "object",
                                        "properties": {
                                            "line": {
                                                "type": "integer",
                                                "description": "Start line number."
                                            },
                                            "character": {
                                                "type": "integer",
                                                "description": "Start character position."
                                            }
                                        },
                                        "required": ["line", "character"],
                                        "additionalProperties": False 
                                    },
                                    "end": {
                                        "type": "object",
                                        "properties": {
                                            "line": {
                                                "type": "integer",
                                                "description": "End line number."
                                            },
                                            "character": {
                                                "type": "integer",
                                                "description": "End character position."
                                            }
                                        },
                                        "required": ["line", "character"],
                                        "additionalProperties": False 
                                    }
                                },
                                "required": ["start", "end"],
                                "additionalProperties": False
                            }
                        },
                        "required": ["message", "severity", "line", "range"],
                        "additionalProperties": False
                    }
                }
            },
            "required": ["diagnostics"],
            "additionalProperties": False
        }
    }
}
