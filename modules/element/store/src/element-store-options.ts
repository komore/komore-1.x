import { type Event, type EventReducer } from '@komore/event';

/**
 * Element store local options
 */
export interface ElementStoreLocalOptions<StateType, EventTypes extends Event<string, Record<string, unknown> | undefined>[]> {
  readonly eventReducer: EventReducer<StateType, EventTypes>;
}

export interface ElementStoreWorkerOptions<StateType, EventTypes extends Event<string, Record<string, unknown> | undefined>[]> {
  scriptUrl: URL;
  
}

/**
 * Element store options
 */
export interface ElementStoreOptions<StateType, EventTypes extends Event<string, Record<string, unknown> | undefined>[]> {
  _?: unknown;
}
