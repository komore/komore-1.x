import { type NodeFactory } from 'typescript';
import { type ProcessedSource } from '../processors/processed-source';
import { buildElementDefinition } from './build-element-definition';
import { type ElementDefinition } from './element-definition';

/**
 * Creates a function that builds an element's definition using a TypeScript node factory
 * @param factory TypeScript node factory
 * @returns Function that builds an element's definition
 */
export function buildElementDefinitionWith(
  factory: NodeFactory
): (processedSource: ProcessedSource) => ElementDefinition {
  return processedSource => buildElementDefinition(factory, processedSource);
}
