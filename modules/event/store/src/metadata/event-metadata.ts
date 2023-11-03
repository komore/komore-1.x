import { type Temporal } from '@js-temporal/polyfill';
import { type Event } from './event';

/**
 * Event metadata
 */
export interface EventMetadata {
  readonly aggregateKey: string;
  readonly sequenceNumber: number;
  readonly size: number;
  readonly timestamp: Temporal.PlainDateTime;
}

/**
 * Event with metadata
 * @template E Event types
 */
export interface EventWithMetadata<E extends Event<any, any>[]> {
  readonly event: E[number];
  readonly metadata: EventMetadata;
}
