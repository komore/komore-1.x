import { type HttpHeader, type HttpStatus } from '@komore/http';
import { createLogEventType, logEventProperties, logEventSeverities } from '@komore/logging';

import { awsDomain } from './aws.domain';

/**
 * AWS log event
 */
export const awsLog = createLogEventType(awsDomain, {
  /**
   * API request sent
   */
  apiRequestSent: logEventProperties<{
    readonly headers: ReadonlyArray<HttpHeader>;
    readonly operation: string;
    readonly service: string;
  }>(logEventSeverities.trace),
  /**
   * API response received
   */
  apiResponseReceived: logEventProperties<{
    readonly headers: ReadonlyArray<HttpHeader>;
    readonly operation: string;
    readonly service: string;
    readonly status: HttpStatus;
  }>(logEventSeverities.trace),
});
