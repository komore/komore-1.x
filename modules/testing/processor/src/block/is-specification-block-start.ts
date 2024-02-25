import { isTypeScriptLabeledStatement, type TypeScriptLabeledStatement, type TypeScriptNode } from '@komore/tsc';

/**
 * Creates a function that tests whether a TypeScript node is a specification block start
 *
 * @param blockName Block name
 * @returns Function that tests whether a TypeScript node is a specification block start
 */
export function isSpecificationBlockStart(
  blockName: string
): (node: TypeScriptNode) => node is TypeScriptLabeledStatement {
  return (node): node is TypeScriptLabeledStatement =>
    isTypeScriptLabeledStatement(node) && node.label.escapedText === blockName;
}
