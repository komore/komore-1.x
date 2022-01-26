import { type Application } from '@komore/application';
import { type ElectronHost } from './electron-host';

/**
 * Electron application
 */
export interface ElectronApplication extends Application<ElectronHost> {

}
