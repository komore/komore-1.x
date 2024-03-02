import { type cognitoTokenGenerationTriggerSources } from './cognito-token-generation-trigger-sources';

/**
 * Cognito TokenGeneration trigger source
 */
export type CognitoTokenGenerationTriggerSource = (typeof cognitoTokenGenerationTriggerSources)[number];
