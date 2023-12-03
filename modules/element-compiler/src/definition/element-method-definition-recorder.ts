import { type ElementMethodDefinition } from './element-method-definition';

/**
 * Element method definition recorder
 */
export interface ElementMethodDefinitionRecorder {
  (methodDefinition: ElementMethodDefinition): void;
}
