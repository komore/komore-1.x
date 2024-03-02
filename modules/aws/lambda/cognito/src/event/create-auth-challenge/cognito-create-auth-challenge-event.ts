import { type CognitoBaseEvent } from '../cognito-base-event';
import { type CognitoCreateAuthChallengeRequest } from './cognito-create-auth-challenge-request';
import { type CognitoCreateAuthChallengeResponse } from './cognito-create-auth-challenge-response';
import { type CognitoCreateAuthChallengeTriggerSource } from './cognito-create-auth-challenge-trigger-source';

/**
 * Cognito CreateAuthChallenge event
 */
export interface CognitoCreateAuthChallengeEvent
  extends CognitoBaseEvent<CognitoCreateAuthChallengeTriggerSource, CognitoCreateAuthChallengeRequest> {
  /**
   * Response
   */
  readonly response: CognitoCreateAuthChallengeResponse;
}
