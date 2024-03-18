import { type ReadonlyRecord } from '@komore/typescript';

import { type CognitoUserPoolId } from '../../user-pool/id/cognito-user-pool-id';

/**
 * Admin initate Cognito auth parameters
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html#API_AdminInitiateAuth_RequestParameters AdminInitiateAuth Request Parameters}
 */
export interface AdminInitiateCognitoAuthParameters {
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
  readonly ContextData?: CognitoContextData;
  /**
   * User pool identifier
   */
  readonly UserPoolId: CognitoUserPoolId;
}
