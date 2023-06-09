import { type CommandHandler } from './command-handler';
import { type On } from './command-handler-on';

type OnCommandType<O> = O extends On<infer C, any> ? C : never;
type OnEventType<O> = O extends On<any, infer E> ? E : never;

/**
 * Creates a command handler
 * @param ons Individual handlers
 * @returns Command handler
 * @template O Command handler on types
 */
export function createCommandHandler<O extends On<any, any>[]>(
  ...ons: [...O]
): CommandHandler<OnCommandType<O[number]>, OnEventType<O>> {
  const map = buildHandlerMap(ons);

  return function (state: S = initialState, event: E[number], metadata: EventMetadata): S {
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
 * Builds a handler map
 * @param ons Individual handlers
 * @returns Handler map
 * @template O Command handler on types
 */
function buildHandlerMap<O extends On<any, any>[]>(...ons: [...O]): Map<string, Array<OnCommandHandler<S, E>>> {
  const map = new Map<string, Array<EventReducer<S, E>>>();

  for (const on of ons) {
    const handlers = map.get(on.type) || [];

    if (handlers.length === 0) {
      map.set(on.type, handlers);
    }

    handlers.push(on.eventReducer);
  }

  return map;
}
