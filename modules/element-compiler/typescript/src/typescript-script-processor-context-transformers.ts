import {
  type ElementEventDefinition,
  type ElementMethodDefinition,
  type ElementPropertyDefinition,
} from '@komore/element-compiler/processor';

import { type ObservableTransformerFactory } from './transformer/observable-transformer-factory';

/**
 * TypeScript script processor context transformers
 */
export interface TypeScriptScriptProcessorContextTransformers {
  readonly eventDefinitions: ObservableTransformerFactory<ElementEventDefinition>;
  readonly methodDefinitions: ObservableTransformerFactory<ElementMethodDefinition>;
  readonly propertyDefinitions: ObservableTransformerFactory<ElementPropertyDefinition>;
}
