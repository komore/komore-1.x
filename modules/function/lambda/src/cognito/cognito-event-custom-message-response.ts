/**
 * Cognito event custom message response
 */
export interface CognitoEventCustomMessageResponse {
  readonly emailMessage: string;
  readonly emailSubject: string;
  readonly smsMessage: string;
}
