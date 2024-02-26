import { type cognitoChallengeNames } from './cognito-challenge-names';

/**
 * Cognito challenge name
 */
export type CognitoChallengeName = (typeof cognitoChallengeNames)[number];
