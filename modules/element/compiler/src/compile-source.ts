import { factory } from 'typescript';
import { createElementClassDeclaration } from './class/create-element-class-declaration';
import { generateScript } from './generate-script';
import { generateStyle } from './generate-style';
import { generateTemplate } from './generate-template';
import { getElementDefinition } from './definition/get-element-definition';
import { parseSource } from './parser/parse-source';

/**
 * Compiles an element source
 *
 * An element source is split into three categories:
 * - &lt;script> elements are processed as scripts
 * - &lt;style> and &lt;link> elements are processed as styles
 * - any remaining element node is processed as a template
 *
 * @param source Source
 */
export function compileSource(source: string): void {
  const { scriptElements, styleElements, templateElement } = parseSource(source);
  const elementDefinition = getElementDefinition(templateElement, scriptElements);
  const templateElementId = undefined;
  const styleSheetsId = undefined;
  createElementClassDeclaration(factory, elementDefinition, templateElementId, styleSheetsId);

  generateScript(scriptElements);
  generateStyle(styleElements);
  generateTemplate(templateElement);
}
