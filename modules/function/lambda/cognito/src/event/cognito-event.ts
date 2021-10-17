import type { CognitoEventMap } from './cognito-event-map';
import type { CognitoEventRequestType } from './cognito-event-request-type';
import type { CognitoEventResponseType } from './cognito-event-response-type';

/**
 * Cognito event
 */
export interface CognitoEvent<TriggerSourceName extends keyof CognitoEventMap> {
  readonly callerContext: {
    readonly awsSdkVersion: string;
    readonly clientId: string;
  };
  readonly region: string;
  readonly request: CognitoEventRequestType<TriggerSourceName>;
  readonly response: CognitoEventResponseType<TriggerSourceName>;
  readonly triggerSource: TriggerSourceName;
  readonly userName: string;
  readonly userPoolId: string;
  readonly version: string;
}
