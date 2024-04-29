import { type LambdaFunctionArn } from '@komore/aws/lambda';

/**
 * Cognito custom SMS Lambda version configuratoin
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CustomSMSLambdaVersionConfigType.html CustomSMSLambdaVersionConfigType}
 */
export interface CognitoCustomSmsLambdaVersionConfig {
  /**
   * Lambda function ARN
   */
  readonly LambdaArn: LambdaFunctionArn;
  /**
   * Trigger version
   */
  readonly LambdaVersion: 'V1_0';
}
