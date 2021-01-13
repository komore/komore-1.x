import type { ElementAttributeDefinition } from '../attribute/element-attribute-definition';
import type { ElementEventDefinition } from '../event/element-event-definition';
import type { ElementPropertyDefinition } from '../property/element-property-definition';

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
