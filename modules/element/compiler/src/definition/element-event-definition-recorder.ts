import { type ElementEventDefinition } from './element-event-definition';

/**
 * Element event definition recorder
 */
export interface ElementEventDefinitionRecorder {
  (eventDefinition: ElementEventDefinition): void;
}
