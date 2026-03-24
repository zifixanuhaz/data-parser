interface DataRecord {
  id: string;
  timestamp: Date;
  value: number;
  metadata?: Record<string, unknown>;
}

type DataFormat = 'json' | 'csv' | 'xml';

interface ParserOptions {
  format: DataFormat;
  delimiter?: string;
  encoding?: BufferEncoding;
  strictMode?: boolean;
}

interface ParseResult {
  records: DataRecord[];
  errors: Error[];
}

interface DataParser {
  parse(data: string, options: ParserOptions): Promise<ParseResult>;
}

export type { DataRecord, DataFormat, ParserOptions, ParseResult };
export { DataParser };