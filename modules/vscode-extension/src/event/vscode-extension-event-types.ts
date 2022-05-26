import { type ConfigurationChangeEvent } from 'vscode';

/**
 * Visual Studio Code extension event types
 */
export interface VscodeExtensionEventTypes {
  configurationChange: ConfigurationChangeEvent;
}
