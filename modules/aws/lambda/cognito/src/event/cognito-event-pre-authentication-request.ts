import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Cognito event pre-authentication request
 * @note {@link https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-authentication.html#cognito-user-pools-lambda-trigger-syntax-pre-auth-request Pre-Authentication request}
 */
export interface CognitoEventPreAuthenticationRequest {
  readonly userAttributes: ReadonlyRecord<string, string>;
  readonly userNotFound?: boolean;
  readonly validationData?: ReadonlyRecord<string, string>;
}
