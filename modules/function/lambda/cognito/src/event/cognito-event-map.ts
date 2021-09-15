import type { CognitoEventCreateAuthChallengeRequest } from './cognito-event-create-auth-challenge-request';
import type { CognitoEventCreateAuthChallengeResponse } from './cognito-event-create-auth-challenge-response';
import type { CognitoEventCustomMessageRequest } from './cognito-event-custom-message-request';
import type { CognitoEventCustomMessageResponse } from './cognito-event-custom-message-response';
import type { CognitoEventDefineAuthChallengeRequest } from './cognito-event-define-auth-challenge-request';
import type { CognitoEventDefineAuthChallengeResponse } from './cognito-event-define-auth-challenge-response';
import type { CognitoEventPostAuthenticationRequest } from './cognito-event-post-authentication-request';
import type { CognitoEventPostConfirmationRequest } from './cognito-event-post-confirmation-request';
import type { CognitoEventPreAuthenticationRequest } from './cognito-event-pre-authentication-request';
import type { CognitoEventPreSignUpRequest } from './cognito-event-pre-sign-up-request';
import type { CognitoEventPreSignUpResponse } from './cognito-event-pre-sign-up-response';
import type { CognitoEventTokenGenerationRequest } from './cognito-event-token-generation-request';
import type { CognitoEventTokenGenerationResponse } from './cognito-event-token-generation-response';
import type { CognitoEventUserMigrationRequest } from './cognito-event-user-migration-request';
import type { CognitoEventUserMigrationResponse } from './cognito-event-user-migration-response';
import type { CognitoEventVerifyAuthChallengeResponseRequest } from './cognito-event-verify-auth-challenge-response-request';
import type { CognitoEventVerifyAuthChallengeResponseResponse } from './cognito-event-verify-auth-challenge-response-response';

/**
 * Cognito event map
 */
export interface CognitoEventMap {
  CreateAuthChallenge_Authentication: [CognitoEventCreateAuthChallengeRequest, CognitoEventCreateAuthChallengeResponse];
  CustomMessage_AdminCreateUser: [CognitoEventCustomMessageRequest, CognitoEventCustomMessageResponse];
  CustomMessage_Authentication: [CognitoEventCustomMessageRequest, CognitoEventCustomMessageResponse];
  CustomMessage_ForgotPassword: [CognitoEventCustomMessageRequest, CognitoEventCustomMessageResponse];
  CustomMessage_ResendCode: [CognitoEventCustomMessageRequest, CognitoEventCustomMessageResponse];
  CustomMessage_SignUp: [CognitoEventCustomMessageRequest, CognitoEventCustomMessageResponse];
  CustomMessage_UpdateUserAttribute: [CognitoEventCustomMessageRequest, CognitoEventCustomMessageResponse];
  CustomMessage_VerifyUserAttribute: [CognitoEventCustomMessageRequest, CognitoEventCustomMessageResponse];
  DefineAuthChallenge_Authentication: [CognitoEventDefineAuthChallengeRequest, CognitoEventDefineAuthChallengeResponse];
  PostAuthentication_Authentication: [CognitoEventPostAuthenticationRequest, never];
  PostConfirmation_ConfirmSignUp: [CognitoEventPostConfirmationRequest, never];
  PostConfirmation_ConfirmForgotPassword: [CognitoEventPostConfirmationRequest, never];
  PreAuthentication_Authentication: [CognitoEventPreAuthenticationRequest, never];
  PreSignUp_AdminCreateUser: [CognitoEventPreSignUpRequest, CognitoEventPreSignUpResponse];
  PreSignUp_ExternalProvider: [CognitoEventPreSignUpRequest, CognitoEventPreSignUpResponse];
  PreSignUp_SignUp: [CognitoEventPreSignUpRequest, CognitoEventPreSignUpResponse];
  TokenGeneration_Authentication: [CognitoEventTokenGenerationRequest, CognitoEventTokenGenerationResponse];
  TokenGeneration_AuthenticationDevice: [CognitoEventTokenGenerationRequest, CognitoEventTokenGenerationResponse];
  TokenGeneration_HostedAuth: [CognitoEventTokenGenerationRequest, CognitoEventTokenGenerationResponse];
  TokenGeneration_NewPasswordChallenge: [CognitoEventTokenGenerationRequest, CognitoEventTokenGenerationResponse];
  TokenGeneration_RefreshTokens: [CognitoEventTokenGenerationRequest, CognitoEventTokenGenerationResponse];
  UserMigration_Authentication: [CognitoEventUserMigrationRequest, CognitoEventUserMigrationResponse];
  UserMigration_ForgotPassword: [CognitoEventUserMigrationRequest, CognitoEventUserMigrationResponse];
  VerifyAuthChallengeResponse_Authentication: [
    CognitoEventVerifyAuthChallengeResponseRequest,
    CognitoEventVerifyAuthChallengeResponseResponse
  ];
}

/**
 * Cognito event request type
 * @template TriggerSourceName Trigger source name
 */
export type CognitoEventRequestType<
  TriggerSourceName extends keyof CognitoEventMap
> = CognitoEventMap[TriggerSourceName][0];

/**
 * Cognito event response type
 * @template TriggerSourceName Trigger source name
 */
export type CognitoEventResponseType<
  TriggerSourceName extends keyof CognitoEventMap
> = CognitoEventMap[TriggerSourceName][1];
