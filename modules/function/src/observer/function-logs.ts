import { createLogEvent, createLogGroup, LogEventSeverities, props } from '@komore/observability/logging';

/**
 * Function log group
 */
const functionLogGroup = createLogGroup('komore/function');

/**
 * Function observable threw an error
 *
 * @cause A function observable threw an error, effectively preventing further invocations as the observable can no longer emit
 * @solution This behavior should not be caused by user code: report the issue
 */
export const functionObservableError = createLogEvent(
  functionLogGroup,
  1,
  LogEventSeverities.CRITICAL,
  'function ${functionName} threw an error: no further invocations will be handled`, error)',
  props<{ functionName: string; error: unknown }>()
);

/**
 * Function observable completed
 *
 * @cause A function observable completed, effectively preventing further invocations as the observable can no longer emit
 * @solution This behavior should not be caused by user code: report the issue
 */
export const functionObservableCompleted = createLogEvent(
  functionLogGroup,
  2,
  LogEventSeverities.CRITICAL,
  'function ${functionName} completed: no further invocations will be handled',
  props<{ functionName: string }>()
);

/**
 * Function invocation ignored
 *
 * @cause A function emitted more than one value for a single invocation
 * @solution Modify the function so that it does not emit more than once
 */
export const functionInvocationIgnored = createLogEvent(
  functionLogGroup,
  3,
  LogEventSeverities.ERROR,
  'function ${functionName} emission #${index} ignored',
  props<{ functionName: string; index: number; result: unknown }>()
);
