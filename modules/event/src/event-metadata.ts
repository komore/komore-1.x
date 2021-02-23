import type { Event } from './event';

/**
 * Event metadata
 */
export type EventMetadata = Readonly<{
  aggregateKey: string;
  sequenceNumber: number;
  size: number;
  timestamp: Date;
}>;

/**
 * Event with metadata
 * @template E Event types
 */
export type EventWithMetadata<E extends Event<any, any>[]> = Readonly<{
  event: E[number];
  metadata: EventMetadata;
}>;
