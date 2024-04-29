import { type DateTimeString } from '@komore/temporal';

import { type CognitoLambdaConfig } from './cognito-lambda-config';
import { type CognitoUserPoolId } from './id/cognito-user-pool-id';
import { type CognitoUserPoolName } from './name/cognito-user-pool-name';

/**
 * Cognito user pool description
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserPoolDescriptionType.html UserPoolDescriptionType}
 */
export interface CognitoUserPoolDescription {
  /**
   * Date and time the user pool was created
   */
  readonly CreationDate: DateTimeString;
  /**
   * User pool identifier
   */
  readonly Id: CognitoUserPoolId;
  /**
   * Lambda configuration
   */
  readonly LambdaConfig: CognitoLambdaConfig;
  /**
   * Date and time the user pool was last modified
   */
  readonly LastModifiedDate: DateTimeString;
  /**
   * User pool name
   */
  readonly Name: CognitoUserPoolName;
}
