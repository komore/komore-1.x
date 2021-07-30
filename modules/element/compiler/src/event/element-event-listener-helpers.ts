import { createParameter } from '@komore/typescript/compiler';
import type {
  Identifier,
  MethodSignature,
  NodeFactory,
  ParameterDeclaration,
  TypeNode,
  TypeParameterDeclaration
} from 'typescript';
import { SyntaxKind } from 'typescript';
import type { EventListenerTypedInformation } from './event-listener-typed-information';
import type { EventMapIndex } from './event-map-index';

/**
 * Creates an event map index parameter
 * ```ts
 * <K extends keyof EventMap>
 * ```
 * @param factory TypeScript node factory
 * @param eventMapType Event map type reference
 * @returns Event map index
 */
export function createEventMapIndexParameter(factory: NodeFactory, eventMapType: TypeNode): EventMapIndex {
  const name = 'K';
  const nameIdentifier = factory.createIdentifier(name);
  const keyofEventMap = factory.createTypeOperatorNode(SyntaxKind.KeyOfKeyword, eventMapType);
  const declaration = factory.createTypeParameterDeclaration(nameIdentifier, keyofEventMap);
  const reference = factory.createTypeReferenceNode(nameIdentifier);
  return {
    name,
    declaration,
    reference
  };
}

/**
 * Creates a method with an add/removeEventListener signature
 * @param factory TypeScript node factory
 * @param name Method name
 * @param optionsTypeName
 * @param eventListenerTypedInfo
 */
export function createAddRemoveEventListenerMethodSignature(
  factory: NodeFactory,
  methodName: string,
  optionsTypeName: string,
  eventListenerTypedInfo?: EventListenerTypedInformation
): MethodSignature {
  const [options] = createOptionsParameter(factory, optionsTypeName);
  const [type] = createTypeParameter(factory, eventListenerTypedInfo);
  const [listener] = createListenerParameter(factory, eventListenerTypedInfo);
  const typeParameters = createTypeParameters(eventListenerTypedInfo);
  const methodParameters = [type, listener, options];
  const returnType = factory.createKeywordTypeNode(SyntaxKind.VoidKeyword);
  const name = factory.createIdentifier(methodName);
  return factory.createMethodSignature(undefined, name, undefined, typeParameters, methodParameters, returnType);
}

/**
 * Creates type parameters for an add/removeEventListener signature
 * @param eventListenerTypedInfo Event listener typed information
 * @returns Type parameters
 */
function createTypeParameters(
  eventListenerTypedInfo?: EventListenerTypedInformation
): ReadonlyArray<TypeParameterDeclaration> | undefined {
  if (eventListenerTypedInfo === undefined) {
    return undefined;
  }

  return [eventListenerTypedInfo.eventMapIndex.declaration];
}

/**
 * Creates a type parameter declaration
 *
 * When no type information is available, a string type is used:
 * ```ts
 * function _(type: string)
 * ```
 *
 * When type information is available, the event map key is used:
 * ```ts
 * function _(type: K)
 * ```
 * @param factory TypeScript node factory
 * @param eventListenerTypedInfo Event listener typed information
 * @returns Parameter declaration and identifier
 */
function createTypeParameter(
  factory: NodeFactory,
  eventListenerTypedInfo?: EventListenerTypedInformation
): [ParameterDeclaration, Identifier] {
  const parameterType =
    eventListenerTypedInfo !== undefined
      ? eventListenerTypedInfo.eventMapIndex.reference
      : factory.createKeywordTypeNode(SyntaxKind.StringKeyword);
  return createParameter(factory, 'type', parameterType);
}

/**
 * Creates a listener parameter declaration
 * ```ts
 * (this: ElementType, event: CustomElement<EventMap[K]>) => any
 * ```
 * @param factory TypeScript node factory
 * @param eventListenerTypedInfo Event listener typed information
 * @returns Parameter declaration
 */
function createTypedListenerCallbackType(
  factory: NodeFactory,
  eventListenerTypedInfo: EventListenerTypedInformation
): TypeNode {
  const { elementType, eventMapType, eventMapIndex } = eventListenerTypedInfo;
  const anyType = factory.createKeywordTypeNode(SyntaxKind.AnyKeyword);
  const eventType = factory.createIndexedAccessTypeNode(eventMapType, eventMapIndex.reference);
  const [callbackThisParameter] = createParameter(factory, 'this', elementType);
  const [callbackEventParameter] = createParameter(factory, 'event', eventType);
  return factory.createFunctionTypeNode(undefined, [callbackThisParameter, callbackEventParameter], anyType);
}

/**
 * Creates a listener parameter declaration
 *
 * When no type information is available, a standard event listener type is used:
 * ```ts
 * function _(listener: EventListenerOrEventListenerObject);
 * ```
 *
 * When type information is available, a typed callback signature is used:
 * ```ts
 * function _(listener: (this: ElementType, event: CustomElement<EventMap[K]>) => any)
 * ```
 * @param factory TypeScript node factory
 * @param eventListenerTypedInfo Event listener typed information
 * @returns Parameter declaration and identifier
 */
function createListenerParameter(
  factory: NodeFactory,
  eventListenerTypedInfo?: EventListenerTypedInformation
): [ParameterDeclaration, Identifier] {
  const parameterType =
    eventListenerTypedInfo !== undefined
      ? createTypedListenerCallbackType(factory, eventListenerTypedInfo)
      : factory.createTypeReferenceNode('EventListenerOrEventListenerObject');
  return createParameter(factory, 'listener', parameterType);
}

/**
 * Creates an options parameter declaration
 * ```ts
 * function _(options?: boolean | OptionsType);
 * ```
 * @param factory TypeScript node factory
 * @param optionsTypeReference Options type reference
 * @returns Parameter declaration and identifier
 */
function createOptionsParameter(factory: NodeFactory, optionsTypeName: string): [ParameterDeclaration, Identifier] {
  const optionsTypeReference = factory.createTypeReferenceNode(optionsTypeName);
  const booleanType = factory.createKeywordTypeNode(SyntaxKind.BooleanKeyword);
  const parameterType = factory.createUnionTypeNode([booleanType, optionsTypeReference]);
  return createParameter(factory, 'options', parameterType, true);
}
