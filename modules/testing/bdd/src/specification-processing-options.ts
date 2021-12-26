import { type ScriptTarget } from 'typescript';

/**
 * Specification processing options
 */
export interface SpecificationProcessingOptions {
  readonly scriptTarget?: ScriptTarget;
}
