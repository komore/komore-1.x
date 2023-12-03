import { SyntaxKind, type PrivateIdentifier, type PropertyDeclaration, type TypeReferenceNode } from 'typescript';
import { type ElementCompilerContext } from '../element-compiler-context';

/**
 * Creates an element attribute observable property declaration
 * ```ts
 *  #α = new Subject<ElementAttributeChangedEvent<keyof ElementAttributeMap>>();
 * ```
 * @param context Element compiler context
 * @param elementAttributeMapReferenceNode Element attribute map reference node
 * @returns Element attribute observable property declaration
 */
export function createElementAttributeChangedPropertyDeclaration(
  context: ElementCompilerContext,
  elementAttributeMapReferenceNode: TypeReferenceNode
): readonly [propertyDeclaration: PropertyDeclaration, identifier: PrivateIdentifier] {
  const { factory, resolveImport } = context;
  const identifier = factory.createPrivateIdentifier('#α');
  const subjectIdentifier = resolveImport({
    name: 'Subject',
    path: '@komore/reactive'
  });
  const keyOfElementAttributeMap = factory.createTypeOperatorNode(
    SyntaxKind.KeyOfKeyword,
    elementAttributeMapReferenceNode
  );
  const newExpression = factory.createNewExpression(subjectIdentifier, [keyOfElementAttributeMap], []);
  const propertyDeclaration = factory.createPropertyDeclaration(
    undefined,
    undefined,
    identifier,
    undefined,
    undefined,
    newExpression
  );
  return [propertyDeclaration, identifier];
}
