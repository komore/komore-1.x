import type { ElementAttributeDefinition } from './element-attribute-definition';
import type { ElementEventDefinition } from './element-event-definition';
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
  readonly eventDefinitions?: ReadonlyArray<ElementEventDefinition>;
  readonly propertyDefinitions?: ReadonlyArray<ElementPropertyDefinition>;
}
