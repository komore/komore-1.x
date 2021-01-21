import type { Identifier, NodeFactory, VariableStatement } from 'typescript';
import { createDocumentCreateElementCall } from '../codegen/create-document-create-element-call';
import { createVariableStatement } from '../codegen/create-variable-statement';

/**
 * Creates an element's templateElement variable
 * ```ts
 * const templateElement = document.createElement("template");
 * ```
 * @param factory TypeScript node factory
 * @returns Variable statement and identifier
 */
export function createElementTemplateElement(factory: NodeFactory): [VariableStatement, Identifier] {
  const createElementCall = createDocumentCreateElementCall(factory, 'template');
  return createVariableStatement(factory, 'templateElement', createElementCall);
}
