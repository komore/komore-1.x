import { type ApplicationOptions } from '@komore/application';
import { type ElectronHost } from './electron-host';

/**
 * Electron application options
 */
export interface ElectronApplicationOptions extends ApplicationOptions<ElectronHost> {}
