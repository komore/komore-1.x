import { ElementEventsSchema, ElementEventsSchemaType, events } from './element-events-schema';

/**
 * Element events
 */
export type ElementEvents<Events extends ElementEventsSchema<any>> = Readonly<{
  [K in keyof ElementEventsSchemaType<Events>]: Event;
}>;

const x = events<{ hello: string, world: number }>();

type X = ElementEvents<typeof x>;
