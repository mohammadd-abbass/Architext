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
    type: str
    expectedPath: Optional[str]
    filePath: Optional[str]
    folderPath: Optional[str]
    message: str
    suggestion: str

class ArchitectureAnalysisResult(BaseModel):
    summary: str
    issues: List[IssueItem]
    recommendedStructure: dict