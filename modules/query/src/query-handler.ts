import { type Event } from '@komore/event';
import { type Observable } from '@komore/reactive';

import { type Query } from './query';
import { type QueryMetadata } from './query-metadata';

/**
 * Query handler
 * @param query Query
 * @param metadata Event metadata
 * @returns Observable events
 * @template C Query type
 * @template E Event type
 */
export type QueryHandler<C extends Query<any, any>[], E extends Event<any, any>[]> = (
  query: C[number],
  metadata: QueryMetadata
) => Observable<E[number]>;
