import { stringify } from 'yaml';

/**
 * Returns a function that turns a value into a YAML string
 *
 * @param replacer Function that transforms the result
 * @param options Options
 * @returns Function that turns a value into a YAML string
 */
 export function toYaml<T = unknown>(
    replacer?: (this: unknown, key: string, value: unknown) => unknown,
    options?: string | number
  ): (value: T) => string;
  
  /**
   * Returns a function that turns a value into a YAML string
   *
   * @param replacer Array of strings and numbers that acts as an approved list
   * @param options Options
   * @returns Function that turns a value into a YAML string
   */
  export function toYaml<T = unknown>(
    replacer?: ReadonlyArray<number | string>,
    options?: string | number
  ): (value: T) => string;
  
  export function toYaml<T = unknown>(
    replacer?: ((this: unknown, key: string, value: unknown) => unknown) | ReadonlyArray<number | string>,
    options?: string | number // TODO: proper options type
  ): (value: T) => string {
    return value => stringify(value, replacer as undefined, options);
  }
  