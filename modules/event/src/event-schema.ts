/**
 * Event schema
 * @template S Schema type
 */
export type EventSchema<S> = Readonly<{
  _t: 'schema';
  _s: S;
}>;

/**
 * Creates event schema typing information
 * @returns Event schema
 * @template S Schema type
 */
export function schema<S extends object>(): EventSchema<S> {
  return {
    _t: 'schema',
    _s: undefined as any as S
  };
}
