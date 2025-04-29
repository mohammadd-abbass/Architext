from typing import Dict, Optional, Any, List
from pydantic import BaseModel, Field, StrictFloat, StrictInt, StrictStr, StrictBool

class generateCommentsRequestModel(BaseModel): 
    code : StrictStr = Field(..., min_length=1)
    language : StrictStr = Field(..., min_length=1)
