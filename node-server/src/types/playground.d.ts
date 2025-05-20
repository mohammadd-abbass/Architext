export type ApiType = 'COMMENT' | 'COMPLEXITY' | 'ANALYZE';

export interface CodeComment {
  line: number;
  comment: string;
}

export interface ComplexityResult {
  complexityScore: number;
  cognitiveComplexity: number;
  cyclomaticComplexity: number;
}

export interface AnalysisResult {
  qualityScore: number;
  issues: string[];
  suggestions: string[];
}

