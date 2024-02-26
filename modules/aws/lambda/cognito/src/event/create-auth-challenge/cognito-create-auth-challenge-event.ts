import { type CognitoCreateAuthChallengeRequest } from './cognito-create-auth-challenge-request';
import { type CognitoCreateAuthChallengeResponse } from './cognito-create-auth-challenge-response';

/**
 * Cognito CreateAuthChallenge event
 */
export interface CognitoCreateAuthChallengeEvent
  extends CognitoBaseEvent<
    'CreateAuthChallenge',
    CognitoCreateAuthChallengeRequest,
    CognitoCreateAuthChallengeResponse
  > {}
