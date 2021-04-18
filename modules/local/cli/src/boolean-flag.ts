import { flags } from '@oclif/parser';

/**
 * Creates a boolean flag
 * @param options Options
 * @returns Boolean flag
 */
export function booleanFlag<T>(options: Partial<flags.IBooleanFlag<T>>): flags.IBooleanFlag<T> {
  return flags.boolean(options);
}
