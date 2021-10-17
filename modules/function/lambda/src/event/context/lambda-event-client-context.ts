import type { LambdaEventClientContextClient } from './lambda-event-client-context-client';
import type { LambdaEventClientContextEnv } from './lambda-event-client-context-env';

/**
 * Lambda event client context
 */
export interface LambdaEventClientContext {
  readonly client: LambdaEventClientContextClient;
  readonly custom?: unknown;
  readonly env: LambdaEventClientContextEnv;
}
