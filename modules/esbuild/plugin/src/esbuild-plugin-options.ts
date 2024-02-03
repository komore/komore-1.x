import { type PluginBuild } from 'esbuild';

/**
 * esbuild plugin options
 */
export interface EsbuildPluginOptions {
  /**
   * Plugin name
   */
  readonly name: string;
  /**
   * Setup function
   */
  readonly setup: (pluginBuild: PluginBuild) => void | Observable<void>;
}
