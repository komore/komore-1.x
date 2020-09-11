/**
 * Command schema
 * @template S Schema type
 */
export type CommandSchema<S> = Readonly<{
  _t: 'schema';
  _s: S;
}>;

/**
 * Creates command properties typing information
 * @returns Command schema
 * @template P Properties type
 */
export function schema<S extends object>(): CommandSchema<S> {
  return {
    _t: 'schema',
    _s: undefined as any as S
  };
}
