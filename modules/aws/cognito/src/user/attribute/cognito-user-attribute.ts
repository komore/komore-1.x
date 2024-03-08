import { type CognitoUserAttributeName } from './name/cognito-user-attribute-name';

/**
 * Cognito user attribute
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AttributeType.html AttributeType}
 */
export interface CognitoUserAttribute {
  /**
   * Attribute name
   */
  readonly Name: CognitoUserAttributeName;
  /**
   * Attribute value
   */
  readonly Value: string;
}
