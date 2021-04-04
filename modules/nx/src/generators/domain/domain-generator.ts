import type { Tree } from '@nrwl/devkit';
import type { FunctionGeneratorOptions } from '../function/function-generator-options';
import { normalizeGeneratorOptions } from '../normalize-generator-options';
import type { NormalizedGeneratorOptions } from '../normalized-generator-options';

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
export function normalizeOptions(host: Tree, options: FunctionGeneratorOptions): NormalizedFunctionGeneratorOptions {
  return normalizeGeneratorOptions(host, options);
}

export default async function domainGenerator(_host: Tree): Promise<void> {
  // TODO
}
