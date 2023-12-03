import { type ReadonlyRecord } from '@komore/typescript';
import { type CognitoEventChallengeMetadataTypes } from './cognito-event-challenge-metadata-types';
import { type CognitoEventChallengeResult } from './cognito-event-challenge-result';

/**
 * Cognito event define auth challenge request
 */
export interface CognitoEventDefineAuthChallengeRequest {
  readonly clientMetadata?: ReadonlyRecord<string, string>;
  readonly session: ReadonlyArray<CognitoEventChallengeResult<keyof CognitoEventChallengeMetadataTypes>>;
  readonly userAttributes: ReadonlyRecord<string, string>;
  readonly userNotFound?: boolean;
}
