import { type AwsRegion } from '@komore/aws';
import { type CognitoUserPoolId } from '@komore/aws/cognito';

import { type CognitoEventCallerContext } from './cognito-event-caller-context';
import { type CognitoEventMap } from './cognito-event-map';
import { type CognitoEventRequestType } from './cognito-event-request-type';
import { type CognitoEventResponseType } from './cognito-event-response-type';

/**
 * Cognito event
 */
export interface CognitoEvent<TriggerSourceName extends keyof CognitoEventMap> {
  /**
   * Caller context
   */
  readonly callerContext: CognitoEventCallerContext;
  /**
   * AWS region
   */
  readonly region: AwsRegion;
  /**
   * Request
   */
  readonly request: CognitoEventRequestType<TriggerSourceName>;
  /**
   * Response
   */
  readonly response: CognitoEventResponseType<TriggerSourceName>;
  /**
   * Trigger source
   */
  readonly triggerSource: TriggerSourceName;
  /**
   * User name
   */
  readonly userName: string;
  /**
   * User pool identifier
   */
  readonly userPoolId: CognitoUserPoolId;
  /**
   * Version
   */
  readonly version: string;
}
