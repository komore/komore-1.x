import { type AwsRegion } from '@komore/aws';
import { type CognitoUserPoolId } from '@komore/aws/cognito';

import { type CognitoEventCallerContext } from './cognito-event-caller-context';

/**
 * Cognito base event
 *
 * @template TriggerSource Trigger source
 */
export interface CognitoBaseEvent<TriggerSource extends string, RequestType> {
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
  readonly request: RequestType;
  /**
   * Trigger source
   */
  readonly triggerSource: TriggerSource;
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
