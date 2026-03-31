// parser.js
import { parse } from 'json5';
import { resolve } from 'path';
import { readFileSync } from 'fs';

interface Config {
  database: {
    host: string;
    username: string;
    password: string;
    database: string;
  };
}

function parseConfig(filePath: string): Config {
  const fileContent = readFileSync(resolve(filePath), 'utf8');
  return parse(fileContent) as Config;
}

export default parseConfig;