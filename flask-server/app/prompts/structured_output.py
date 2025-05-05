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
  "diagnostics": [
    {
      "message": "Function 'fetchData' should follow camelCase naming convention.",
      "severity": "warning",
      "line": 12,
      "range": {
        "start": { "line": 12, "character": 9 },
        "end": { "line": 12, "character": 18 }
      }
    },
    {
      "message": "Function 'getUserData' is 52 lines long, exceeding the maximum allowed length of 40.",
      "severity": "warning",
      "line": 34,
      "range": {
        "start": { "line": 34, "character": 0 },
        "end": { "line": 34, "character": 12 }
      }
    },
    {
      "message": "Missing JSDoc comment for function 'saveUser'.",
      "severity": "info",
      "line": 75,
      "range": {
        "start": { "line": 75, "character": 0 },
        "end": { "line": 75, "character": 9 }
      }
    },
    {
      "message": "Disallowed pattern 'console.log' found.",
      "severity": "error",
      "line": 90,
      "range": {
        "start": { "line": 90, "character": 2 },
        "end": { "line": 90, "character": 14 }
      }
    }
  ]
}

