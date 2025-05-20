export type ApiType = 'COMMENT' | 'COMPLEXITY' | 'ANALYZE';

export interface CodeComment {
  line: number;
  comment: string;
}

