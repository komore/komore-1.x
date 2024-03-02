/**
 * Cognito CustomMessage response
 */
export interface CognitoCustomMessageResponse {
  /**
   * Email message
   */
  readonly emailMessage: string;
  /**
   * Email subject
   */
  readonly emailSubject: string;
  /**
   * SMS message
   */
  readonly smsMessage: string;
}
