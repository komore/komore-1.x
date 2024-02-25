import { createPrinter, createSourceFile, EmitHint, NewLineKind, ScriptKind } from 'typescript';

import { type TypeScriptNode } from '../node/typescript-node';

import { type TypeScriptNodeToSourceStringOptions } from './typescript-node-to-source-string-options';
import { typeScriptTargetToScriptTarget } from '../target/typescript-target-to-script-target';

/**
 * Creates a function that returns a source string, given a TypeScript node
 *
 * @param options TypeScript node to source string options
 * @returns Function that returns a source string, given a TypeScript node
 */
export function typeScriptNodeToSourceString(
  options: TypeScriptNodeToSourceStringOptions
): (node: TypeScriptNode) => string {
  const { fileName, target = 'ESNext' } = options;
  const scriptTarget = typeScriptTargetToScriptTarget(target);
  return node => {
    const sourceFile = createSourceFile(fileName, '', scriptTarget, false, ScriptKind.TS);
    const printer = createPrinter({ newLine: NewLineKind.LineFeed });
    return printer.printNode(EmitHint.Unspecified, node, sourceFile) + '\n';
  };
}
