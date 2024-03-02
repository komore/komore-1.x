import { type cognitoPreSignUpTriggerSources } from './cognito-pre-sign-up-trigger-sources';

/**
 * Cognito PreSignUp trigger source
 */
export type CognitoPreSignUpTriggerSource = (typeof cognitoPreSignUpTriggerSources)[number];
