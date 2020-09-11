import { EventMetadata } from './event-metadata';
import { EventReducer } from './event-reducer';
import { On, OnEventType } from './event-reducer-on';

/**
 * Creates an event reducer
 * @param initialState Initial state
 * @param ons Event handlers
 * @returns Event reducer
 * @template S State type
 * @template O Event reducer on types
 */
export function createReducer<S, O extends On<S, any>[]>(
  initialState: S,
  ...ons: [...O]
): EventReducer<S, OnEventType<O[number]>> {
  const map = buildReducerMap<S, O>(ons);

  return function (state: S = initialState, event: OnEventType<O[number]>, metadata: EventMetadata): S {
    const reducers = map.get(event.type);

    if (reducers !== undefined) {
      for (const reducer of reducers) {
        state = reducer(state, event, metadata);
      }
    }

    return state;
  };
}

/**
 * Builds a reducer map
 * @param ons On handlers
 * @returns Reducer map
 * @template S State type
 * @template O Event reducer on types
 */
function buildReducerMap<S, O extends On<S, any>[]>(
  ons: [...O]
): Map<string, ReadonlyArray<EventReducer<S, OnEventType<O[number]>>>> {
  const map = new Map<string, Array<EventReducer<S, OnEventType<O[number]>>>>();

  for (const on of ons) {
    const reducers = map.get(on.type) || [];
    // TODO: proper typing to avoid the cast
    const reducer = (on.eventReducer as any) as EventReducer<S, OnEventType<O[number]>>;

    if (reducers.length === 0) {
      map.set(on.type, reducers);
    }

    reducers.push(reducer);
  }

  return map;
}
