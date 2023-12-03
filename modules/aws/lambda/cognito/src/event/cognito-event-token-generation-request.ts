import { type ReadonlyRecord } from '@komore/typescript';
import { type CognitoEventTokenGenerationGroupOverrideDetails } from './cognito-event-token-generation-group-override-details';

/**
 * Cognito event token generation request
 */
export interface CognitoEventTokenGenerationRequest {
  readonly userAttributes: ReadonlyRecord<string, string>;
  readonly groupConfiguration: CognitoEventTokenGenerationGroupOverrideDetails;
  readonly clientMetadata?: ReadonlyRecord<string, string>;
}
