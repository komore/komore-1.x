import { type TypeScriptSourceFile, type TypeScriptTransformerFactory } from '@komore/tsc';

import { visitSpecificationSourceNodeChild } from './visit-specification-source-node-child';

/**
 * Creates a feature processor transformer factory
 *
 * @returns Feature processor transformer factory
 */
export function createFeatureProcessorTransformerFactory(): TypeScriptTransformerFactory<TypeScriptSourceFile> {
  return ({ mapChildren }) =>
    node =>
      mapChildren(node, visitSpecificationSourceNodeChild);
}
