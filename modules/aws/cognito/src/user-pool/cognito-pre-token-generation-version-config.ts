import { type LambdaFunctionArn } from '@komore/aws/lambda';

/**
 * Cognito pre-token generation version configuration
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_PreTokenGenerationVersionConfigType.html PreTokenGenerationVersionConfigType}
 */
export interface CognitoPreTokenGenerationVersionConfig {
  /**
   * Lambda function ARN
   */
  readonly LambdaArn: LambdaFunctionArn;
  /**
   * Trigger version
   */
  readonly LambdaVersion: 'V1_0' | 'V2_0';
}
