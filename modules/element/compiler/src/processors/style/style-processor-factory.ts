import type { ProcessorFactory } from '../processor-factory';
import type { StyleProcessor } from './style-processor';

/**
 * Style processor factory
 */
export interface StyleProcessorFactory extends ProcessorFactory<unknown, StyleProcessor> {}
