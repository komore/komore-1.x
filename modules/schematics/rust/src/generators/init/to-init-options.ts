import { type InitOptions } from './init-options';
import { type InitSchema } from './init-schema';

/**
 * Normalizes an init generator schema
 * @param initSchema Init schema
 * @returns Init options
 */
export function normalizeInitSchema(initSchema: InitSchema): InitOptions {
  return {
    channel: initSchema.channel ?? 'stable'
  };
}
