import type { MethodDeclaration, NodeFactory } from 'typescript';

/**
 * Creates a watchAttribute method declaration
 * ```ts
 * watchAttribute<K extends keyof AttributeMap>(attributeName: K): Observable<AttributeMap[K] | undefined> {
 *   return this._k_attr$[attributeName];
 * }
 * ```
 * @param factory TypeScript node factory
 * @returns Method declaration
 */
export function createWatchAttributeMethod(factory: NodeFactory): MethodDeclaration {
  const typeParameters = [];
  const parameters = [];
  const type = factory.createTypeReferenceNode('Observable', []); // ObservElementAttributeMap[K] | undefined
  return factory.createMethodDeclaration(
    undefined,
    undefined,
    undefined,
    'watchAttribute',
    undefined,
    typeParameters,
    parameters,
    type,
    block
  );
}
