import { createSuperCall } from '@komore/typescript/compiler';
import { type ConstructorDeclaration, type Identifier, type NodeFactory, type Statement } from 'typescript';
import { createAppendCallExpression } from '../codegen/create-append-call-expression';
import { createAdoptedStyleSheetsExpression } from './create-adopted-style-sheets-expression';
import { createShadowRootVariableStatement } from './create-shadow-root-variable-statement';
import { createTemplateContentVariableStatement } from './create-template-content-variable-statement';

/**
 * Creates an element class constructor
 * ```ts
 * constructor() {
 *   super();
 *   const shadowRoot = this.attachShadow({ mode: 'open' });
 *   const templateContent = templateElement.content.cloneNode(true);
 *   shadowRoot.adoptedStyleSheets = styleSheets;
 *   shadowRoot.append(templateContent);
 * }
 * ```
 * @param factory TypeScript node factory
 * @param templateElementIdentifier Template element identifier
 * @param styleSheetsIdentifier Style sheets array identifier
 * @returns Constructor declaration
 */
export function createElementClassConstructor(
  factory: NodeFactory,
  templateElementIdentifier: Identifier | undefined,
  styleSheetsIdentifier: Identifier | undefined
): ConstructorDeclaration {
  const superCallExpression = createSuperCall(factory);
  const bodyStatements: Array<Statement> = [superCallExpression];

  if (templateElementIdentifier !== undefined) {
    const [shadowRootVariableStatement, shadowRoot] = createShadowRootVariableStatement(factory, 'shadowRoot', 'open');
    const [templateContentVariableStatement, templateContent] = createTemplateContentVariableStatement(
      factory,
      'templateContent',
      templateElementIdentifier
    );
    const appendCallExpression = createAppendCallExpression(factory, shadowRoot, templateContent);

    bodyStatements.push(shadowRootVariableStatement);
    bodyStatements.push(templateContentVariableStatement);

    if (styleSheetsIdentifier !== undefined) {
      const shadowRootAdoptedStyleSheets = createAdoptedStyleSheetsExpression(factory, shadowRoot, styleSheetsIdentifier);
      bodyStatements.push(shadowRootAdoptedStyleSheets);
    }

    bodyStatements.push(appendCallExpression);
  }

  const body = factory.createBlock(bodyStatements, true);
  return factory.createConstructorDeclaration(undefined, undefined, [], body);
}
