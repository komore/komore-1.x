import { window, type ExtensionContext, type Uri } from 'vscode';

/**
 * Creates a function that opens a domain, given a URI
 *
 * @param extensionContext Extension context
 * @returns Function that opens a domain
 */
export function uriToOpenDomain(_extensionContext: ExtensionContext): (uri: Uri) => void {
  return uri => {
    const msg = `Open domain not implemented (${uri})`;
    console.log(msg);
    window.showWarningMessage(msg);
  };
}
