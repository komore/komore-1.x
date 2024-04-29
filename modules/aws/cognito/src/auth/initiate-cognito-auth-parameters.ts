import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Initiate Cognito auth parameters
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html#API_InitiateAuth_RequestParameters InitiateAuth Request Parameters}
 */
export interface InitiateCognitoAuthParameters {
  /**
   * Analytics metadata
   */
  readonly AnalyticsMetadata?: CognitoAnalyticsMetadata; // TODO
  /**
   * Authentication flow
   */
  readonly AuthFlow: string; // TODO: typed
  /**
   * Authentication parameters
   */
  readonly AuthParameters: ReadonlyRecord<string, string>; // TODO: typed based on AuthFlow
  /**
   * Application client identifier
   */
  readonly ClientId: string;
  /**
   * Client metadata
   */
  readonly ClientMetadata?: ReadonlyRecord<string, string>;
  /**
   * Contextual data about the user session
   */
  readonly UserContextData?: CognitoContextData;
}
