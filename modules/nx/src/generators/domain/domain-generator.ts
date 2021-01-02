import { Tree } from '@nrwl/devkit';
import { FunctionGeneratorOptions } from '../function/function-generator-options';
import { normalizeGeneratorOptions } from '../normalize-generator-options';
import { NormalizedGeneratorOptions } from '../normalized-generator-options';

/**
 * Normalized domain generator options
 */
type NormalizedFunctionGeneratorOptions = NormalizedGeneratorOptions<FunctionGeneratorOptions>;

/**
 * Normalizes a function generator's options
 * @param host Host
 * @param options Options
 * @returns Normalized function generator schema
 */
function normalizeOptions(host: Tree, options: FunctionGeneratorOptions): NormalizedFunctionGeneratorOptions {
  return normalizeGeneratorOptions(host, options);
}

export default async function domainGenerator(host: Tree): Promise<void> {}
