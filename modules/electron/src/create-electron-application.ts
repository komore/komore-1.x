import { createApplication } from '@komore/application';

import { type ElectronApplication } from './electron-application';
import { type ElectronApplicationOptions } from './electron-application-options';

/**
 * Creates an Electron application
 *
 * @param options Electron application options
 * @returns Electron application
 */
export function createElectronApplication(options: ElectronApplicationOptions): ElectronApplication {
  return createApplication(options);
}
