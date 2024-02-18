import { type EsbuildCliClient } from '@komore/esbuild';

/**
 * esbuild client options
 */
export interface EsbuildClientOptions {
  /**
   * esbuild CLI client
   */
  readonly cliClient: EsbuildCliClient;
}
