import { ScriptKind, createSourceFile } from 'typescript';

import { typeScriptTargetToScriptTarget } from '../target/typescript-target-to-script-target';
import { type SourceTextToTypeScriptSourceFileOptions } from './source-text-to-typescript-source-file-options';
import { type TypeScriptSourceFile } from './typescript-source-file';

export function sourceTextToTypeScriptSourceFile(
  options: SourceTextToTypeScriptSourceFileOptions
): (sourceText: string) => TypeScriptSourceFile {
  const { fileName, target = 'ESNext' } = options;
  const scriptTarget = typeScriptTargetToScriptTarget(target);
  return sourceText => createSourceFile(fileName, sourceText, scriptTarget, false, ScriptKind.TS);
}
