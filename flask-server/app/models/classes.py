from typing import Dict, Optional, Any, List, Literal
from pydantic import BaseModel, Field, StrictFloat, StrictInt, StrictStr, StrictBool

class generateCommentsRequestModel(BaseModel): 
    code : StrictStr = Field(..., min_length=1)
    language : StrictStr = Field(..., min_length=1)

class calculateComplexityRequestModel(BaseModel): 
    code : StrictStr = Field(..., min_length=1)
    language : StrictStr = Field(..., min_length=1)

class FileItem(BaseModel):
    path: StrictStr = Field(..., min_length=1)
    type: Literal["file", "folder"]  

class CheckArchitectureRequestModel(BaseModel):
    files: List[FileItem]
    referenceArchitecture: Dict[str, Any]

class AnalyzeFileArchitectureRequestModel(BaseModel):
    code: StrictStr = Field(..., min_length=1)
    language : StrictStr = Field(..., min_length=1)
    referenceArchitecture: Dict[str, Any]

class ConfigGeneratorModel(BaseModel):
    config: StrictStr = Field(..., min_length=1)


class IssueItem(BaseModel):
    type: str = Field(..., description="Type of the issue")
    expectedPath: Optional[str] = Field(None, description="Expected path")
    filePath: Optional[str] = Field(None, description="Actual file path")
    folderPath: Optional[str] = Field(None, description="Actual folder path")
    message: str = Field(..., description="Issue description")
    suggestion: str = Field(..., description="Resolution suggestion")

class ArchitectureAnalysisResult(BaseModel):
    summary: str = Field(..., description="Analysis summary")
    issues: List[IssueItem] = Field(..., description="List of issues")
    recommendedStructure: Dict[str, List[str]] = Field(
        ...,
        description="Recommended folder paths per layer",
        example={"controllers": ["app/Http/Controllers"]}
    )

class DiagnosticRange(BaseModel):
    start: dict  
    end: dict

class DiagnosticItem(BaseModel):
    message: str
    severity: Literal["info", "warning", "error"]
    line: int
    range: DiagnosticRange

class FileArchitectureResult(BaseModel):
    diagnostics: List[DiagnosticItem]