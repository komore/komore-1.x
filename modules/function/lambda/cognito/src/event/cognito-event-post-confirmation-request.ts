import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Cognito event post confirmation request
 * @note {@link https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-confirmation.html#cognito-user-pools-lambda-trigger-syntax-post-confirmation-request Post Confirmation request}
 */
export interface CognitoEventPostConfirmationRequest {
  readonly clientMetadata?: ReadonlyRecord<string, string>;
  readonly userAttributes: ReadonlyRecord<string, string>;
}
