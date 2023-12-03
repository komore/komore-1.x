import { type ElementPropertyDefinition } from './element-property-definition';

/**
 * Element property definition recorder
 */
export interface ElementPropertyDefinitionRecorder {
  (propertyDefinition: ElementPropertyDefinition): void;
}
