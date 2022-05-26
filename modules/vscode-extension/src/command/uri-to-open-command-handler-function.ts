import { window, type ExtensionContext, type Uri } from 'vscode';

/**
 * Creates a function that opens a command handler function, given a URI
 *
 * @param extensionContext Extension context
 * @returns Function that opens a command handler function
 */
export function uriToOpenCommandHandlerFunction(_extensionContext: ExtensionContext): (uri: Uri) => void {
  return uri => {
    const msg = `Open command handler function not implemented (${uri})`;
    console.log(msg);
    window.showWarningMessage(msg);
  };
}
