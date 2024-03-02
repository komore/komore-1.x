import { type CognitoBaseEvent } from '../cognito-base-event';
import { type CognitoPreSignUpRequest } from './cognito-pre-sign-up-request';
import { type CognitoPreSignUpResponse } from './cognito-pre-sign-up-response';
import { type CognitoPreSignUpTriggerSource } from './cognito-pre-sign-up-trigger-source';

/**
 * Cognito PreSignUp event
 */
export interface CognitoPreSignUpEvent
  extends CognitoBaseEvent<CognitoPreSignUpTriggerSource, CognitoPreSignUpRequest> {
  /**
   * Response
   */
  readonly response: CognitoPreSignUpResponse;
}
