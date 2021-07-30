import type { ElementAttributeDefinition } from './element-attribute-definition';
import type { ElementCustomPropertyDefinition } from './element-custom-property-definition';
import type { ElementEventDefinition } from './element-event-definition';
import type { ElementMethodDefinition } from './element-method-definition';
import type { ElementPropertyDefinition } from './element-property-definition';

/**
 * Element definition
 */
export interface ElementDefinition {
  readonly baseClassName: string;
  readonly baseTagName?: string;
  readonly className: string;
  readonly tagName: string;
  readonly attributeDefinitions?: ReadonlyArray<ElementAttributeDefinition>;
  readonly customPropertyDefinitions?: ReadonlyArray<ElementCustomPropertyDefinition>;
  readonly eventDefinitions?: ReadonlyArray<ElementEventDefinition>;
  readonly methodDefinitions?: ReadonlyArray<ElementMethodDefinition>;
  readonly propertyDefinitions?: ReadonlyArray<ElementPropertyDefinition>;
}
