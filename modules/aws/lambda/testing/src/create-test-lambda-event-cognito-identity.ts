import { type LambdaEventCognitoIdentity } from '@komore/aws/lambda';

/**
 * Creates a test Lambda event Cognito identity
 *
 * @param cognitoIdentity Cognito identity
 * @returns Test Lambda event Cognito identity
 */
export function createTestLambdaEventCognitoIdentity(
  cognitoIdentity?: Partial<LambdaEventCognitoIdentity>
): LambdaEventCognitoIdentity {
  return {};
}
