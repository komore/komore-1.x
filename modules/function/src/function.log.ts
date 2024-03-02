import { createLogEventType, logEventProperties, logEventSeverities } from '@komore/logging';

import { functionDomain } from './function.domain';

/**
 * Function log event
 */
export const functionLog = createLogEventType(functionDomain, {
  /**
   * Function emission ignored
   *
   * @cause A function emitted more than one value for a single invocation
   * @solution Modify the function so that it does not emit more than once
   */
  emissionIgnored: logEventProperties<{
    /**
     * Function name
     */
    readonly functionName: string;
    /**
     * Emission number
     */
    readonly index: number;
    /**
     * Emission value
     */
    readonly value: unknown;
  }>(logEventSeverities.error),
  /**
   * Function observable completed
   *
   * @cause A function observable completed, effectively preventing further invocations as the observable can no longer emit
   * @solution This behavior should not be caused by user code: report the issue
   */
  observableCompleted: logEventProperties<{
    /**
     * Function name
     */
    readonly functionName: string;
  }>(logEventSeverities.critical),
  /**
   * Function observable errored
   *
   * @cause A function observable threw an error, effectively preventing further invocations as the observable can no longer emit
   * @solution This behavior should not be caused by user code: report the issue
   */
  observableErrored: logEventProperties<{
    /**
     * Error
     */
    readonly error: unknown;
    /**
     * Function name
     */
    readonly functionName: string;
  }>(logEventSeverities.critical),
});
