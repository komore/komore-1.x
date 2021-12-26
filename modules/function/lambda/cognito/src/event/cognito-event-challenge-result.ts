import { type CognitoEventChallengeMetadataTypes } from './cognito-event-challenge-metadata-types';

/**
 * Cognito event challenge result
 */
export interface CognitoEventChallengeResult<ChallengeName extends keyof CognitoEventChallengeMetadataTypes> {
  readonly challengeMetadata?: CognitoEventChallengeMetadataTypes[ChallengeName];
  readonly challengeName: ChallengeName;
  readonly challengeResult: boolean;
}
