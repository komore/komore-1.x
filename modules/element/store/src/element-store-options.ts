import type { Event, EventReducer } from '@komore/event';

/**
 * Element store local options
 */
export interface StoreLocalOptions<StateType, EventTypes extends Event<string, Record<string, unknown> | undefined>[]> {
  readonly eventReducer: EventReducer<StateType, EventTypes>;
}

export interface StoreWorkerOptions<StateType, EventTypes extends Event<string, Record<string, unknown> | undefined>[]> {
  scriptUrl: URL;
  
}

/**
 * Element store options
 */
export interface StoreOptions<StateType, EventTypes extends Event<string, Record<string, unknown> | undefined>[]> {
  _?: unknown;
}
