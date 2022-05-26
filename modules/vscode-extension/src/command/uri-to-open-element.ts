import { window, type ExtensionContext, type Uri } from 'vscode';

/**
 * Creates a function that opens an element, given a URI
 *
 * @param extensionContext Extension context
 * @returns Function that opens an element
 */
export function uriToOpenElement(_extensionContext: ExtensionContext): (uri: Uri) => void {
  return uri => {
    const msg = `Open element not implemented (${uri})`;
    console.log(msg);
    window.showWarningMessage(msg);
  };
}
