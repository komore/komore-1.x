import type { CognitoEventMap, CognitoEventRequestType, CognitoEventResponseType } from './cognito-event-map';

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
