import { type BaseGeneratorOptions } from '../base-generator-options';

/**
 * Function generator options
 */
export interface FunctionGeneratorOptions extends BaseGeneratorOptions {
  readonly directory?: string;
  readonly name: string;
  readonly tags?: string;
}
