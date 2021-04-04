import type { BaseGeneratorOptions } from '../base-generator-options';

/**
 * Function generator options
 */
export interface FunctionGeneratorOptions extends BaseGeneratorOptions {
  name: string;
  tags?: string;
  directory?: string;
}
