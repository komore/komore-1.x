import { createPropertyAccess } from '@komore/typescript/compiler';
import type { CallExpression, NodeFactory } from 'typescript';

/**
 * Creates a document.createElement call expression
 * ```
 * document.createElement('tagName')
 * ```
 * @param factory TypeScript node factory
 * @param tagName Tag name
 * @returns Call expression
 */
export function createDocumentCreateElementCall(factory: NodeFactory, tagName: string): CallExpression {
  const createElement = createPropertyAccess(factory, 'document', 'createElement');
  const templateStringLiteral = factory.createStringLiteral(tagName, true);
  return factory.createCallExpression(createElement, undefined, [templateStringLiteral]);
}
