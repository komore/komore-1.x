import { workspace, type ExtensionContext } from 'vscode';
import { dispatchVscodeExtensionEvent } from '../event/dispatch-vscode-extension-event';

/**
 * Adds workspace subscriptions to an extension context
 *
 * @param extensionContext Extension context
 */
export function addWorkspaceSubscriptionsToExtensionContext(extensionContext: ExtensionContext): void {
  extensionContext.subscriptions.push(
    dispatchVscodeExtensionEvent('configurationChange', workspace.onDidChangeConfiguration)
  );
}
