import { window, type ExtensionContext, type Uri } from 'vscode';

/**
 * Creates a function that opens an event reducer, given a URI
 *
 * @param extensionContext Extension context
 * @returns Function that opens an event reducer
 */
export function uriToOpenEventReducer(_extensionContext: ExtensionContext): (uri: Uri) => void {
  return uri => {
    const msg = `Open event reducer not implemented (${uri})`;
    console.log(msg);
    window.showWarningMessage(msg);
  };
}
