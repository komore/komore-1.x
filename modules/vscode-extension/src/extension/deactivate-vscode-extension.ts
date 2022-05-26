import { vscodeExtensionContextSubject } from './vscode-extension-context';

/**
 * Deactivates the Visual Studio Code extension
 *
 * @returns Promise that resolves when the extension has been deactivated
 */
export async function deactivateVscodeExtension(): Promise<void> {
  vscodeExtensionContextSubject.next(undefined);
}
