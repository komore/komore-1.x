import { window, type ExtensionContext, type Uri } from 'vscode';

/**
 * Creates a function that opens a stack, given a URI
 *
 * @param extensionContext Extension context
 * @returns Function that opens a stack
 */
export function uriToOpenStack(_extensionContext: ExtensionContext): (uri: Uri) => void {
  return uri => {
    const msg = `Open stack not implemented (${uri})`;
    console.log(msg);
    window.showWarningMessage(msg);
  };
}
