import { createPropertyAccess } from '@komore/typescript/compiler';
import { type Identifier, type NodeFactory } from 'typescript';

/**
 * Creates a statement that sets a template's HTML
 * @param factory TypeScript node factory
 * @param templateElementId Template element identifier
 * @param html HTML string
 * @returns Expression statement
 */
export function createElementSetTemplateHtml(factory: NodeFactory, templateElementId: Identifier, html: string) {
  const templateInnerHTML = createPropertyAccess(factory, templateElementId, 'innerHTML');
  const htmlLiteral = factory.createStringLiteral(html);
  const templateInnerHTMLAssignment = factory.createAssignment(templateInnerHTML, htmlLiteral);
  return factory.createExpressionStatement(templateInnerHTMLAssignment);
}
