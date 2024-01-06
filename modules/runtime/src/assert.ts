import { runtimeError } from './runtime.error';

/**
 * Asserts a condition
 *
 * @param condition Condition
 * @param message Message
 */
export function assert<T>(condition: T, message: string): asserts condition;

/**
 * Asserts a condition
 * @param condition Condition
 * @param errorFactory Error factory
 */
export function assert<T>(condition: T, errorFactory: () => Error): asserts condition;

export function assert<T>(condition: T, messageOrErrorFactory: string | (() => Error)): asserts condition {
  if (condition) {
    return;
  }

  if (typeof messageOrErrorFactory === 'function') {
    const errorFactory = messageOrErrorFactory;
    throw errorFactory();
  } else {
    const message = messageOrErrorFactory;
    throw runtimeError.assertionFailed({ message });
  }
}
