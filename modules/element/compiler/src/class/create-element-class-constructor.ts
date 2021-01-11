import type {
  ConstructorDeclaration,
  ExpressionStatement,
  Identifier,
  NodeFactory,
  Statement,
  VariableStatement
} from 'typescript';
import { createPropertyAccess } from '../codegen/create-property-access';
import { createVariableStatement } from '../codegen/create-variable-statement';

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
 * @param templateElement Template element identifier
 * @param styleSheets Style sheets array identifier
 * @returns Constructor declaration
 */
export function createElementClassConstructor(
  factory: NodeFactory,
  templateElement: Identifier | undefined,
  styleSheets: Identifier | undefined
): ConstructorDeclaration {
  const superCallExpression = createSuperCallExpression(factory);
  const bodyStatements: Array<Statement> = [superCallExpression];

  if (templateElement !== undefined) {
    const [shadowRootVariableStatement, shadowRoot] = createShadowRootVariableStatement(factory);
    const [templateContentVariableStatement, templateContent] = createTemplateContentVariableStatement(factory, templateElement);
    const appendCallExpression = createAppendCallExpression(factory, shadowRoot, templateContent);

    bodyStatements.push(shadowRootVariableStatement);
    bodyStatements.push(templateContentVariableStatement);

    if (styleSheets !== undefined) {
      const shadowRootAdoptedStyleSheets = createAdoptedStyleSheetsExpression(factory, shadowRoot, styleSheets);
      bodyStatements.push(shadowRootAdoptedStyleSheets);
    }

    bodyStatements.push(appendCallExpression);
  }

  const body = factory.createBlock(bodyStatements, true);
  return factory.createConstructorDeclaration(undefined, undefined, [], body);
}

/**
 * Creates a super() call expression
 * @param factory TypeScript node factory
 * @returns Expression statement
 */
function createSuperCallExpression(factory: NodeFactory): ExpressionStatement {
  const superCall = factory.createCallExpression(factory.createSuper(), undefined, undefined);
  return factory.createExpressionStatement(superCall);
}

/**
 * Creates a shadow root variable statement
 * @param factory TypeScript node factory
 * @returns Shadow root identifier and variable statement
 */
function createShadowRootVariableStatement(factory: NodeFactory): [VariableStatement, Identifier] {
  const attachShadowOptionsMode = factory.createPropertyAssignment('mode', factory.createStringLiteral('open'));
  const attachShadowOptions = factory.createObjectLiteralExpression([attachShadowOptionsMode]);
  const attachShadow = createPropertyAccess(factory, factory.createThis(), 'attachShadow');
  const attachShadowCall = factory.createCallExpression(attachShadow, undefined, [attachShadowOptions]);
  return createVariableStatement(factory, 'shadowRoot', attachShadowCall);
}

/**
 * Creats an adoptedStyleSheets assignment expression
 * @param factory TypeScript node factory
 * @param shadowRoot Shadow root identifier
 * @param styleSheets Style sheets identifier
 * @returns Exprssion statement
 */
function createAdoptedStyleSheetsExpression(
  factory: NodeFactory,
  shadowRoot: Identifier,
  styleSheets: Identifier
): ExpressionStatement {
  const adoptedStyleSheets = createPropertyAccess(factory, shadowRoot, 'adoptedStyleSheets');
  const adoptedStyleSheetsAssignment = factory.createAssignment(adoptedStyleSheets, styleSheets);
  return factory.createExpressionStatement(adoptedStyleSheetsAssignment);
}

/**
 * Creates a templateContent variable statement
 * ```ts
 * const templateContent = templateElement.content.cloneNode(true)
 * ```
 * @param factory TypeScript node factory
 * @param templateElement Template element identifier
 */
function createTemplateContentVariableStatement(
  factory: NodeFactory,
  templateElement: Identifier
): [VariableStatement, Identifier] {
  const cloneNode = createPropertyAccess(factory, templateElement, 'content', 'cloneNode');
  const cloneNodeCall = factory.createCallExpression(cloneNode, undefined, [factory.createTrue()]);
  return createVariableStatement(factory, 'templateContent', cloneNodeCall);
}

/**
 * Creates an append call expression
 * ```ts
 * shadowRoot.append(templateContent)
 * ```
 * @param factory TypeScript node factory
 * @param shadowRoot Shadow root identifier
 * @param templatContent Template content identifier
 * @returns Expression statement
 */
function createAppendCallExpression(
  factory: NodeFactory,
  shadowRoot: Identifier,
  templateContent: Identifier
): ExpressionStatement {
  const append = createPropertyAccess(factory, shadowRoot, 'append');
  const appendCall = factory.createCallExpression(append, undefined, [templateContent]);
  return factory.createExpressionStatement(appendCall);
}
