/**
 * Event
 * @template T Event type
 * @template S Event schema type
 */
export type Event<T extends string, S extends object | void = void> = Readonly<{
  type: T;
}> &
  (S extends object ? Readonly<Omit<S, 'type'>> : {});

/**
 * Event type from an event type
 * @template E Event type
 */
export type EventType<E> = E extends Event<infer T, any> ? T : never;

/**
 * Event schema type from an event type
 * @template Event type
 */
export type EventSchemaType<E> = E extends Event<any, infer S> ? S : never;
