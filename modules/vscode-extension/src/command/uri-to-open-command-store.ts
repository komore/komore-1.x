import { window, type ExtensionContext, type Uri } from 'vscode';

/**
 * Creates a function that opens a command store, given a URI
 *
 * @param extensionContext Extension context
 * @returns Function that opens a command store
 */
export function uriToOpenCommandStore(_extensionContext: ExtensionContext): (uri: Uri) => void {
  return uri => {
    const msg = `Open command store not implemented (${uri})`;
    console.log(msg);
    window.showWarningMessage(msg);
  };
}
