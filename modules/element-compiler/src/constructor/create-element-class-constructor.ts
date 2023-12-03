import { createSuperCall } from '@komore/typescript/compiler';
import { type ConstructorDeclaration, type Identifier, type Statement } from 'typescript';
import { createAppendCallExpression } from '../codegen/create-append-call-expression';
import { type ElementCompilerContext } from '../element-compiler-context';
import { createAdoptedStyleSheetsExpression } from './create-adopted-style-sheets-expression';
import { createShadowRootVariableStatement } from './create-shadow-root-variable-statement';
import { createTemplateContentVariableStatement } from './create-template-content-variable-statement';

/**
 * Creates an element class constructor
 *
 * By default, the templateIdentifier is expected to be an identifier for a function returned by `withHtmlTemplate`.
 * ```ts
 * constructor() {
 *   super();
 *   const shadowRoot = this.attachShadow({ mode: 'open' });
 *   shadowRoot.adoptedStyleSheets = styleSheets;
 *   applyTemplateTo(shadowRoot);
 * }
 * ```
 *
 * When the `avoidImports` optimization option is selected, the template identifier is expected to be an identifier for
 * a variable that represents an HTML template element.
 * ```ts
 * constructor() {
 *   super();
 *   const shadowRoot = this.attachShadow({ mode: 'open' });
 *   const templateContent = templateElement.content.cloneNode(true);
 *   shadowRoot.adoptedStyleSheets = styleSheets;
 *   shadowRoot.append(templateContent);
 * }
 * ```
 *
 * When there is no template, no shadow root is created.
 * ```ts
 * constructor() {
 *   super();
 *   const shadowRoot = this.attachShadow({ mode: 'open' });
 *   const templateContent = templateElement.content.cloneNode(true);
 *   shadowRoot.adoptedStyleSheets = styleSheets;
 *   shadowRoot.append(templateContent);
 * }
 * ```
 * @param elementCompilerContext Element compiler context
 * @param templateIdentifier Template identifier
 * @param styleSheetsIdentifier Style sheets array identifier
 * @returns Constructor declaration
 */
export function createElementClassConstructor(
  { factory, optimizations }: ElementCompilerContext,
  templateIdentifier: Identifier | undefined,
  styleSheetsIdentifier: Identifier | undefined
): ConstructorDeclaration {
  const superCallExpression = createSuperCall(factory);
  const bodyStatements: Array<Statement> = [superCallExpression];

  if (templateIdentifier !== undefined) {
    const [shadowRootVariableStatement, shadowRoot] = createShadowRootVariableStatement(factory, 'shadowRoot', 'open');
    const [templateContentVariableStatement, templateContent] = createTemplateContentVariableStatement(
      factory,
      'templateContent',
      applyTemplateToFunctionIdentifier
    );
    const appendCallExpression = createAppendCallExpression(factory, shadowRoot, templateContent);

    bodyStatements.push(shadowRootVariableStatement);
    bodyStatements.push(templateContentVariableStatement);

    if (styleSheetsIdentifier !== undefined) {
      const shadowRootAdoptedStyleSheets = createAdoptedStyleSheetsExpression(
        factory,
        shadowRoot,
        styleSheetsIdentifier
      );
      bodyStatements.push(shadowRootAdoptedStyleSheets);
    }

    bodyStatements.push(appendCallExpression);
  }

  const body = factory.createBlock(bodyStatements, true);
  return factory.createConstructorDeclaration(undefined, undefined, [], body);
}
