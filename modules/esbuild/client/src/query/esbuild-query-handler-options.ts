import { type EsbuildCliClient } from '@komore/esbuild';

/**
 * esbuild query handler options
 */
export interface EsbuildQueryHandlerOptions {
  /**
   * esbuild CLI client
   */
  readonly cliClient: EsbuildCliClient;
}
