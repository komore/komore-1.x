import { type Event, type EventReducer } from '@komore/event';
import { type NextObserver, Subject } from '@komore/reactive';
import { type ElementStoreOptions } from './element-store-options';

/**
 * Creates a local element store
 * @param eventReducer Event reducer or URL for the event reducer when running as a worker
 * @param options 
 * @returns Observer used to notify the store of events, and TODO
 * @template
 */
export function createLocalElementStore<
  StateType,
  EventTypes extends Event<string, Record<string, unknown> | undefined>[]
>(eventReducer: EventReducer<StateType, EventTypes>, options?: ElementStoreOptions): [observer: NextObserver<EventTypes[number]>, query: unknown] {
  const localState = new Subject<StateType>();
  function next(value: EventTypes[number]): void {

  }

  return [{ next }, undefined];
}
