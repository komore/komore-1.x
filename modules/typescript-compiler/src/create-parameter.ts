import {
  SyntaxKind,
  type BindingName,
  type Expression,
  type Identifier,
  type NodeFactory,
  type ParameterDeclaration,
  type TypeNode,
} from 'typescript';

/**
 * Creates a parameter
 *
 * ```ts
 * name?: type
 * ```
 *
 * @param factory TypeScript node factory
 * @param name Parameter name
 * @param type Parameter type, or types of a union
 * @param optional Whether the parameter is optional
 * @param initializer Optional initializer expression
 * @returns Parameter declaration and identifier
 */
export function createParameter(
  factory: NodeFactory,
  name: string | Identifier,
  type?: TypeNode | ReadonlyArray<TypeNode>,
  optional?: boolean,
  initializer?: Expression
): readonly [parameterDeclaration: ParameterDeclaration, identifier: Identifier];

/**
 * Creates a parameter using a binding name
 *
 * ```ts
 * { }?: type
 * ```
 *
 * @param factory TypeScript node factory
 * @param name Parameter name
 * @param type Parameter type, or types of a union
 * @param optional Whether the parameter is optional
 * @param initializer Optional initializer expression
 * @returns Parameter declaration
 */
export function createParameter(
  factory: NodeFactory,
  name: BindingName,
  type?: TypeNode | ReadonlyArray<TypeNode>,
  optional?: boolean,
  initializer?: Expression
): readonly [parameterDeclaration: ParameterDeclaration, bindingName: BindingName];

export function createParameter(
  factory: NodeFactory,
  name: string | Identifier | BindingName,
  type?: TypeNode | ReadonlyArray<TypeNode>,
  optional?: boolean,
  initializer?: Expression
): readonly [ParameterDeclaration, BindingName] {
  const nameId = typeof name === 'string' ? factory.createIdentifier(name) : name;
  const questionToken = optional ? factory.createToken(SyntaxKind.QuestionToken) : undefined;
  const parameterType = type instanceof Array ? factory.createUnionTypeNode(type) : type;
  const declaration = factory.createParameterDeclaration(
    undefined,
    undefined,
    nameId,
    questionToken,
    parameterType,
    initializer
  );
  return [declaration, declaration.name];
}
