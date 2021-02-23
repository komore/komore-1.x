/**
 * Event
 * @template EventType Event type
 * @template EventProperties Event properties type
 */
export interface Event<
  EventType extends string,
  EventProperties extends Record<string, unknown> | undefined = undefined
> {
  readonly type: EventType;
  readonly properties: EventProperties extends Record<string, unknown> ? EventProperties : never;
  readonly aggregateKey: string;
  readonly sequenceNumber: number;
}

/**
 * Event properties schema
 * @template EventType Event type
 */
export type EventPropertiesSchemaType<
  EventType extends Event<string, Record<string, unknown> | undefined>
> = EventType extends Event<string, infer EventPropertiesSchema> ? EventPropertiesSchema : never;
