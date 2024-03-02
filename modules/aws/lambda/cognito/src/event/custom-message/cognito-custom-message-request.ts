import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Cognito CustomMessage request
 */
export interface CognitoCustomMessageRequest {
  /**
   * Client metadata
   */
  readonly clientMetadata?: ReadonlyRecord<string, string>;
  /**
   * Code parameter
   */
  readonly codeParameter: string;
  /**
   * User attributes
   */
  readonly userAttributes: ReadonlyRecord<string, string>;
  /**
   * User name parameter
   */
  readonly usernameParameter: string;
}
