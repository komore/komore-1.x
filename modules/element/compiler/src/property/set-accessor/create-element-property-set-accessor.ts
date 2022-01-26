import { createParameter } from '@komore/typescript/compiler';
import { type ElementPropertyDefinition } from '@komore/element/compiler/processor';
import { type AccessorDeclaration, type Identifier } from 'typescript';
import { isElementPropertyAttributeBound } from '../../definition/is-element-property-attribute-bound';
import { createElementPropertyType } from '../create-element-property-type';
import { createElementUnboundPropertySetAccessorBody } from './create-element-unbound-property-set-accessor-body';
import { type ElementCompilerContext } from '../../element-compiler-context';
import { createElementBoundPropertySetAccessorBody } from './create-element-bound-property-set-accessor-body';

/**
 * Creates an element property set accessor
 *
 * When a property is not bound to an attribute, it directly emits the new value
 * ```ts
 * set propertyName(value: PropertyType) {
 *   this.φ.propertyName.next(value);
 * }
 * ```
 * When a property is bound to an attribute, the set accessor sets the attribute so that the attribute change callback
 * ends up triggering the value being emitted from `attributeChangedCallback`:
 * ```ts
 * set propertyName(value: PropertyType) {
 *   this.setAttribute('attribute-name', value);
 * }
 * set propertyName(value: PropertyType | undefined) {
 *   if (value !== undefined) {
 *     this.setAttribute('attribute-name', value);
 *   } else {
 *     this.removeAttribute('attribute-name');
 *   }
 * }
 * ```
 * @param context Element compiler context
 * @param containerName Container name
 * @param propertyDefinition Element property definition
 * @returns Accessor declaration
 */
export function createElementPropertySetAccessor(
  context: ElementCompilerContext,
  containerName: string,
  propertyDefinition: ElementPropertyDefinition
): readonly [accessorDeclaration: AccessorDeclaration, identifier: Identifier] {
  const factory = context.factory;
  const { propertyName } = propertyDefinition;
  const nameId = factory.createIdentifier(propertyName);
  const propertyType = createElementPropertyType(factory, propertyDefinition);
  const [valueDeclaration, value] = createParameter(factory, 'value', propertyType);
  const body = isElementPropertyAttributeBound(propertyDefinition)
    ? createElementBoundPropertySetAccessorBody(context, propertyDefinition, value)
    : createElementUnboundPropertySetAccessorBody(context, containerName, propertyDefinition, value);
  const accessorDeclaration = factory.createSetAccessorDeclaration(
    undefined,
    undefined,
    nameId,
    [valueDeclaration],
    body
  );
  return [accessorDeclaration, nameId];
}
