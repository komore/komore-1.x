import { type ErrorFromType } from '@komore/error';
import { runtimeHostError } from '@komore/runtime/host';

/**
 * Returns an unhandled runtime host error
 *
 * @param errorEvent Browser error event
 * @returns Unhandled runtime host error
 */
export function browserErrorEventToUnhandledHostError(errorEvent: ErrorEvent): ErrorFromType<typeof runtimeHostError> {
  const { colno: column, error: thrownError, filename: name, lineno: line, message } = errorEvent;
  return runtimeHostError.unhandled({
    message,
    source: {
      column,
      line,
      name,
    },
    thrownError,
  });
}
