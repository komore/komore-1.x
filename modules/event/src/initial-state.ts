/**
 * Initial state creator function
 * @template S State type
 */
export type InitialStateCreator<S> = () => S;

/**
 * Initial state
 *
 * An initial state can either be a partial version of the state type, a function that returns a partial version of the
 * state type, or nothing.
 *
 * @template S State type
 */
export type InitialState<S> = Partial<S> | InitialStateCreator<Partial<S>> | void;
