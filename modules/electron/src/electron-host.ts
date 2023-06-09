import { type Host } from '@komore/runtime';

/**
 * Electron host
 */
export interface ElectronHost extends Host {
  /**
   * Versions
   */
  readonly versions: NodeJS.ProcessVersions;
}
