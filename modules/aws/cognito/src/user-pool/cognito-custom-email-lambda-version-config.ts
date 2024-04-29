import { type LambdaFunctionArn } from '@komore/aws/lambda';

/**
 * Cognito custom email Lambda version configuratoin
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CustomEmailLambdaVersionConfigType.html CustomEmailLambdaVersionConfigType}
 */
export interface CognitoCustomEmailLambdaVersionConfig {
  /**
   * Lambda function ARN
   */
  readonly LambdaArn: LambdaFunctionArn;
  /**
   * Trigger version
   */
  readonly LambdaVersion: 'V1_0';
}
