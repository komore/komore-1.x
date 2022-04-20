import { type ReadonlyRecord } from '@komore/typescript';
import { type TsConfigSourceFile } from 'typescript';

/**
 * Creates a function that returns path aliases from a tsconfig.json source file
 *
 * @returns Function that returns path aliases from a tsconfig.json source file
 */
export function tsConfigSourceFileToPathAliases(): (
  tsConfigSourceFile: TsConfigSourceFile
) => ReadonlyRecord<string, string> {
  return _tsConfigSourceFile => ({});
}
