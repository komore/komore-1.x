import { parse } from 'yaml';

export function yamlToObject<T>(): (yaml: string) => T {
  return yaml => parse(yaml);
}
