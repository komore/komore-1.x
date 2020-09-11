/**
 * Command
 * @template T Command type
 * @template S Command schema type
 */
export type Command<T extends string, S extends object | void = void> = Readonly<{
  type: T;
}> &
  (S extends object ? Readonly<S> : {});

/**
 * Command type from an command type
 * @template E Command type
 */
export type CommandType<E> = E extends Command<infer T, any> ? T : never;

/**
 * Command schema type from an command type
 * @template Command type
 */
export type CommandSchemaType<E> = E extends Command<any, infer S> ? S : never;
