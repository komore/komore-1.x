import { type LambdaFunctionArn } from '@komore/aws/lambda';
import { type KmsKeyArn } from '@komore/aws/kms';

import { type CognitoCustomEmailLambdaVersionConfig } from './cognito-custom-email-lambda-version-config';
import { type CognitoCustomSmsLambdaVersionConfig } from './cognito-custom-sms-lambda-version-config';
import { type CognitoPreTokenGenerationVersionConfig } from './cognito-pre-token-generation-version-config';

/**
 * Cognito Lambda triggers configuration
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_LambdaConfigType.html LambdaConfigType}
 */
export interface CognitoLambdaConfig {
  /**
   * Creates an authentication challenge
   */
  readonly CreateAuthChallenge?: LambdaFunctionArn;
  /**
   * Custom email sender trigger
   */
  readonly CustomEmailSender?: CognitoCustomEmailLambdaVersionConfig;
  /**
   * Custom message trigger
   */
  readonly CustomMessage?: LambdaFunctionArn;
  /**
   * Custom SMS sender trigger
   */
  readonly CustomSMSSender?: CognitoCustomSmsLambdaVersionConfig;
  /**
   * Defines the authentication challenge
   */
  readonly DefineAuthCallenge?: LambdaFunctionArn;
  /**
   * KMS key ARN used to encrypt codes and temporary passwords sent to `CustomEmailSender` and `CustomSMSSender`
   */
  readonly KMSKeyId?: KmsKeyArn;
  /**
   * Post-authentication trigger
   */
  readonly PostAuthentication?: LambdaFunctionArn;
  /**
   * Post-confirmation trigger
   */
  readonly PostConfirmation?: LambdaFunctionArn;
  /**
   * Pre-authentication trigger
   */
  readonly PreAuthentication?: LambdaFunctionArn;
  /**
   * Pre-registration trigger
   */
  readonly PreSignUp?: LambdaFunctionArn;
  /**
   * Pre-token generation trigger
   */
  readonly PreTokenGenerationConfig?: CognitoPreTokenGenerationVersionConfig;
  /**
   * User migration trigger
   */
  readonly UserMigration?: LambdaFunctionArn;
  /**
   * Verifies the authentication challenge response
   */
  readonly VerifyAuthChallengeResponse?: LambdaFunctionArn;
}
