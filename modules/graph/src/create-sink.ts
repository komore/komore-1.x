import { Sink } from './sink';

/**
 * Creates a sink
 * @return Sink
 * @template InputType Input type
 */
export function createSink<InputType>(): Sink<InputType> {
  return {
    closed: true,
    next: value => {},
    error: error => {},
    complete: () => {}
  };
}
